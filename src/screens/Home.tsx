import { useState } from "react";
import { AppHeader } from "../components/AppHeader";
import { Photo } from "../components/Photo";
import {
  Button,
  Card,
  MicroLabel,
  ProgressBar,
  ProgressRing,
  SectionHeader,
} from "../components/ui";
import {
  AppleIcon,
  CheckIcon,
  DropIcon,
  DumbbellIcon,
  FireIcon,
  HexIcon,
} from "../components/icons";
import { elementMeta } from "../components/ElementGlyph";
import { soon } from "../components/toast";
import { metrics, todaysSession, user, weekTrack } from "../data";
import { useLang } from "../i18n";

type DailyCheckIn = {
  training: boolean;
  nutrition: boolean;
  water: boolean;
};

const CHECK_IN_KEY = "element-core-daily-check-in";

function todayKey() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

type CheckInHistory = Record<string, DailyCheckIn>;

const EMPTY_CHECK_IN: DailyCheckIn = {
  training: false,
  nutrition: false,
  water: false,
};

function readCheckInHistory(): CheckInHistory {
  if (typeof localStorage === "undefined") return {};
  try {
    const saved = JSON.parse(localStorage.getItem(CHECK_IN_KEY) ?? "");
    if (saved.items && saved.date) return { [saved.date]: saved.items };
    return saved.history ?? {};
  } catch {
    return {};
  }
}

function DailyCheckInCard({
  checkIn,
  onToggle,
}: {
  checkIn: DailyCheckIn;
  onToggle: (key: keyof DailyCheckIn) => void;
}) {
  const { lang } = useLang();
  const portuguese = lang === "pt";

  const items = [
    {
      key: "training" as const,
      label: portuguese ? "Treino" : "Training",
      icon: DumbbellIcon,
      color: "#e2a93b",
    },
    {
      key: "nutrition" as const,
      label: portuguese ? "Alimentação" : "Nutrition",
      icon: AppleIcon,
      color: "#8bc8b0",
    },
    {
      key: "water" as const,
      label: portuguese ? "Água" : "Water",
      icon: DropIcon,
      color: "#7bb7d8",
    },
  ];
  const completed = Object.values(checkIn).filter(Boolean).length;

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between mb-5">
        <div>
          <MicroLabel>
            {portuguese ? "Check-in diário" : "Daily check-in"}
          </MicroLabel>
          <h2 className="font-display uppercase tracked-sm text-[20px] font-700 mt-1">
            {portuguese ? "Cuide do seu dia" : "Own your day"}
          </h2>
        </div>
        <span className="font-mono text-[10px] text-gold-hi border border-gold/30 bg-gold/10 rounded-full px-2.5 py-1">
          {completed}/3
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {items.map(({ key, label, icon: Icon, color }) => {
          const active = checkIn[key];
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => onToggle(key)}
              className={`flex flex-col items-center gap-2 rounded-[14px] border p-3 transition-all active:scale-95 ${active ? "border-gold/60 bg-gold/10" : "border-border bg-elevated/30"}`}
            >
              <div className="relative h-[58px] w-[58px]">
                <svg viewBox="0 0 58 58" className="h-full w-full -rotate-90">
                  <circle
                    cx="29"
                    cy="29"
                    r="24"
                    fill="none"
                    stroke="var(--color-elevated)"
                    strokeWidth="5"
                  />
                  <circle
                    cx="29"
                    cy="29"
                    r="24"
                    fill="none"
                    stroke={color}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={151}
                    strokeDashoffset={active ? 0 : 151}
                    className="transition-all duration-500"
                  />
                </svg>
                <span
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ color }}
                >
                  {active ? (
                    <CheckIcon width={18} height={18} strokeWidth={2.5} />
                  ) : (
                    <Icon width={18} height={18} />
                  )}
                </span>
              </div>
              <span
                className={`font-mono text-[9px] uppercase tracking-[0.08em] ${active ? "text-ink" : "text-muted"}`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
      <p className="text-[11px] text-muted mt-4 text-center">
        {completed === 3
          ? portuguese
            ? "Dia completo. Excelente consistência."
            : "Day complete. Excellent consistency."
          : portuguese
            ? "Marque treino, alimentação e água ao longo do dia."
            : "Log training, nutrition and water as you go."}
      </p>
    </Card>
  );
}

function MonthlyActivityCalendar({ history }: { history: CheckInHistory }) {
  const { lang } = useLang();
  const portuguese = lang === "pt";
  const [selectedDay, setSelectedDay] = useState(todayKey());
  const current = new Date();
  const year = current.getFullYear();
  const month = current.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = new Intl.DateTimeFormat(portuguese ? "pt-BR" : "en-US", {
    month: "long",
    year: "numeric",
  }).format(current);
  const weekdays = portuguese
    ? ["D", "S", "T", "Q", "Q", "S", "S"]
    : ["S", "M", "T", "W", "T", "F", "S"];
  const selected = history[selectedDay] ?? EMPTY_CHECK_IN;
  const selectedCompleted = Object.values(selected).filter(Boolean).length;
  const activeDays = Object.keys(history).filter((key) => {
    const date = new Date(`${key}T12:00:00`);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month &&
      Object.values(history[key]).some(Boolean)
    );
  }).length;

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <MicroLabel>
            {portuguese ? "Histórico de atividade" : "Activity history"}
          </MicroLabel>
          <h2 className="font-display uppercase tracked-sm text-[20px] font-700 mt-1">
            {portuguese ? "Calendário mensal" : "Monthly calendar"}
          </h2>
        </div>
        <span className="font-mono text-[10px] text-success border border-success/30 bg-success/10 rounded-full px-2.5 py-1">
          {activeDays} {portuguese ? "ativos" : "active"}
        </span>
      </div>
      <div className="flex items-center justify-between mb-3">
        <span className="font-display tracked-sm text-[14px] text-ink capitalize">
          {monthName}
        </span>
        <span className="font-mono text-[9px] text-muted">
          {portuguese ? "toque em um dia" : "tap a day"}
        </span>
      </div>
      <div className="grid grid-cols-7 gap-y-2 text-center">
        {weekdays.map((day, index) => (
          <span
            key={`${day}-${index}`}
            className="font-mono text-[9px] text-muted"
          >
            {day}
          </span>
        ))}
        {Array.from({ length: firstWeekday }).map((_, index) => (
          <span key={`empty-${index}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const record = history[key];
          const count = record
            ? Object.values(record).filter(Boolean).length
            : 0;
          const ringColors = [
            record?.training ? "#ffc107" : null,
            record?.nutrition ? "#35e38f" : null,
            record?.water ? "#28b9ff" : null,
          ].filter((color): color is string => color !== null);
          const ringCircumference = 2 * Math.PI * 12.5;
          const ringSegment =
            ringCircumference / Math.max(ringColors.length, 1);
          const isToday = key === todayKey();
          const isSelected = key === selectedDay;
          return (
            <div key={key} className="relative mx-auto h-8 w-8">
              {ringColors.length > 0 && (
                <svg
                  viewBox="0 0 32 32"
                  className="pointer-events-none absolute -inset-1 h-10 w-10 -rotate-90"
                  aria-hidden="true"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="12.5"
                    fill="none"
                    stroke="#3b414a"
                    strokeWidth="5.5"
                  />
                  {ringColors.map((color, ringIndex) => (
                    <circle
                      key={`${key}-${color}`}
                      cx="16"
                      cy="16"
                      r="12.5"
                      fill="none"
                      stroke={color}
                      strokeWidth="5.5"
                      strokeLinecap="butt"
                      strokeDasharray={`${ringSegment} ${ringCircumference - ringSegment}`}
                      strokeDashoffset={-(ringSegment * ringIndex)}
                    />
                  ))}
                </svg>
              )}
              <button
                type="button"
                onClick={() => setSelectedDay(key)}
                className={`relative h-8 w-8 rounded-full font-mono text-[10px] transition-colors ${isSelected ? "bg-transparent text-ink" : isToday ? "border border-gold text-gold-hi" : "text-sub hover:bg-elevated"}`}
                aria-label={`${day}: ${count} ${portuguese ? "atividades" : "activities"}`}
              >
                {day}
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-4 rounded-[12px] border border-border bg-elevated/30 p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
            {selectedDay.split("-").reverse().join("/")}
          </span>
          <span className="font-mono text-[10px] text-gold-hi">
            {selectedCompleted}/3
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            ["training", portuguese ? "Treino" : "Training"],
            ["nutrition", portuguese ? "Alimentação" : "Nutrition"],
            ["water", portuguese ? "Água" : "Water"],
          ].map(([key, label]) => (
            <span
              key={key}
              className={`rounded-full border px-2 py-1 font-mono text-[9px] ${selected[key as keyof DailyCheckIn] ? "border-success/40 bg-success/10 text-success" : "border-border text-muted"}`}
            >
              {selected[key as keyof DailyCheckIn] ? "✓ " : "○ "}
              {label}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function Home({
  onStart,
  onProfile,
  onBell,
}: {
  onStart: () => void;
  onProfile: () => void;
  onBell: () => void;
}) {
  const { t } = useLang();
  const [history, setHistory] = useState<CheckInHistory>(readCheckInHistory);
  const currentCheckIn = history[todayKey()] ?? EMPTY_CHECK_IN;

  const toggleCheckIn = (key: keyof DailyCheckIn) => {
    const nextDay = { ...currentCheckIn, [key]: !currentCheckIn[key] };
    const nextHistory = { ...history, [todayKey()]: nextDay };
    setHistory(nextHistory);
    localStorage.setItem(
      CHECK_IN_KEY,
      JSON.stringify({ history: nextHistory }),
    );
  };

  return (
    <div className="h-full overflow-y-auto scroll-area pb-24 fade">
      <AppHeader
        label={t("home.welcome")}
        title={user.first}
        onProfile={onProfile}
        onBell={onBell}
      />

      <div className="px-5 space-y-5 mt-1">
        {/* Today's training hero (top of hierarchy) */}
        <Card className="relative overflow-hidden h-[188px]" onClick={onStart}>
          <Photo
            src={todaysSession.img}
            alt="Today's session"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/10" />
          <div className="relative h-full flex flex-col justify-between p-5">
            <div className="flex items-center gap-2">
              <span className="font-mono uppercase tracking-[0.16em] text-[10px] text-gold-hi bg-gold/15 border border-gold/30 rounded-full px-2.5 py-1">
                Today&apos;s Training
              </span>
            </div>
            <div>
              <h2 className="font-display uppercase tracked-sm text-[24px] font-700 leading-none">
                {todaysSession.title}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <MicroLabel className="text-sub">
                  {todaysSession.category}
                </MicroLabel>
                <span className="text-muted">·</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-gold-hi">
                  {todaysSession.duration}
                </span>
                <span className="text-muted">·</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-sub">
                  {todaysSession.difficulty}
                </span>
              </div>
              <p className="text-[11px] text-muted mt-1">
                {todaysSession.meta}
              </p>
              <div className="mt-3">
                <Button className="h-11" onClick={onStart}>
                  Start Training
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <DailyCheckInCard checkIn={currentCheckIn} onToggle={toggleCheckIn} />
        <MonthlyActivityCalendar history={history} />

        {/* Core score */}
        <Card className="p-5 flex items-center gap-5">
          <ProgressRing value={user.coreScore} size={122}>
            <span className="font-display text-[34px] font-700 leading-none text-ink">
              {user.coreScore}
              <span className="text-[16px] text-gold-hi">%</span>
            </span>
            <MicroLabel className="mt-1">Core Score</MicroLabel>
          </ProgressRing>
          <div className="flex-1">
            <span className="font-mono uppercase tracking-[0.12em] text-[11px] text-success border border-success/30 bg-success/10 rounded-full px-2.5 py-1">
              Strong
            </span>
            <p className="font-display text-[13px] text-gold-hi mt-3">
              +3% this week
            </p>
            <div className="mt-4 space-y-2.5">
              {metrics.map((m) => (
                <div key={m.key}>
                  <div className="flex justify-between items-center text-[11px] mb-1">
                    <span className="font-mono uppercase tracking-[0.1em] text-muted">
                      {m.key}
                      <span
                        className="ml-1.5"
                        style={{ color: elementMeta[m.element].hi }}
                      >
                        {elementMeta[m.element].label}
                      </span>
                    </span>
                    <span className="font-display font-600 text-ink">
                      {m.value}
                    </span>
                  </div>
                  <ProgressBar
                    value={m.value}
                    color={elementMeta[m.element].color}
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Streak + weekly progress */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4" onClick={() => soon("Streak details")}>
            <FireIcon width={22} height={22} className="text-gold" />
            <MicroLabel className="block mt-3">Weekly Streak</MicroLabel>
            <div className="font-display text-[28px] font-700 leading-none mt-1">
              12 <span className="text-[14px] text-sub">DAYS</span>
            </div>
            <p className="text-[11px] text-muted mt-1">
              Best: {user.bestStreak} days
            </p>
          </Card>
          <Card className="p-4" onClick={() => soon("Weekly progress")}>
            <MicroLabel>This week</MicroLabel>
            <div className="flex justify-between mt-3">
              {weekTrack.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <span
                    className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-600 ${
                      d.state === "done"
                        ? "bg-gold text-bg"
                        : d.state === "today"
                          ? "border border-gold text-gold-hi"
                          : "border border-border text-muted"
                    }`}
                  >
                    {d.state === "done" ? (
                      <CheckIcon width={12} height={12} strokeWidth={2.5} />
                    ) : (
                      d.d
                    )}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-display text-[13px] text-ink mt-3">
              {user.weeklyDone} / {user.weeklyTarget}{" "}
              <span className="text-muted text-[11px] font-sans">
                sessions completed
              </span>
            </p>
          </Card>
        </div>

        {/* Next checkpoint */}
        <div>
          <SectionHeader title="Next Checkpoint" />
          <Card className="p-5" onClick={() => soon("Checkpoint")}>
            <div className="flex items-center gap-3">
              <HexIcon width={26} height={26} className="text-gold" />
              <div className="flex-1">
                <div className="font-display uppercase tracked-sm text-[15px] font-600">
                  Foundation I → Foundation II
                </div>
                <p className="text-[11px] text-muted mt-0.5">
                  Complete 4 more sessions and pass your mobility checkpoint.
                </p>
              </div>
              <span className="font-display text-[18px] font-700 text-gold-hi">
                72%
              </span>
            </div>
            <ProgressBar value={72} className="mt-4" />
          </Card>
        </div>
      </div>
    </div>
  );
}
