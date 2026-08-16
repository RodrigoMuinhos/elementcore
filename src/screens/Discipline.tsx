import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  CheckIcon,
  PauseIcon,
  PlayIcon,
  TargetIcon,
} from "../components/icons";
import { Button, Card, Chip, MicroLabel, ProgressBar } from "../components/ui";
import { Photo } from "../components/Photo";
import { disciplines } from "../data";

type Stage = "home" | "levels" | "preview" | "player" | "complete";
type Level = 1 | 2 | 3;
type HiiTPhase = "work" | "rest";

const hiitIntervals: Record<Level, { work: number; rest: number }> = {
  1: { work: 30, rest: 30 },
  2: { work: 40, rest: 20 },
  3: { work: 50, rest: 10 },
};

function playAlertTone() {
  if (typeof window === "undefined" || !window.AudioContext) return;
  const context = new window.AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = 880;
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.18, context.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.22);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.24);
  window.setTimeout(() => void context.close(), 400);
}

const identity: Record<
  string,
  {
    accent: string;
    bright: string;
    dark: string;
    sessions: number;
    xp: number;
    streak: number;
  }
> = {
  strength: {
    accent: "#E64A3C",
    bright: "#FF654F",
    dark: "#8F241D",
    sessions: 22,
    xp: 2180,
    streak: 5,
  },
  flow: {
    accent: "#8B72D9",
    bright: "#B29DFF",
    dark: "#514484",
    sessions: 16,
    xp: 1840,
    streak: 4,
  },
  endurance: {
    accent: "#32A9C5",
    bright: "#63D8EF",
    dark: "#17677A",
    sessions: 18,
    xp: 1960,
    streak: 3,
  },
  combat: {
    accent: "#838B3D",
    bright: "#B3BA59",
    dark: "#535827",
    sessions: 18,
    xp: 1840,
    streak: 4,
  },
};

const levelInfo: Record<
  Level,
  {
    name: string;
    tagline: string;
    duration: string;
    intensity: string;
    xp: number;
    multiplier: string;
  }
> = {
  1: {
    name: "FOUNDATION",
    tagline: "Learn the patterns.",
    duration: "20–25 MIN",
    intensity: "MODERATE",
    xp: 150,
    multiplier: "1.0×",
  },
  2: {
    name: "PERFORMANCE",
    tagline: "Build capacity.",
    duration: "30–40 MIN",
    intensity: "CHALLENGING",
    xp: 280,
    multiplier: "1.15×",
  },
  3: {
    name: "ELITE",
    tagline: "Push your limits.",
    duration: "40–50 MIN",
    intensity: "HIGH INTENSITY",
    xp: 420,
    multiplier: "1.30×",
  },
};

const sessions: Record<
  string,
  { title: string; focus: string[]; blocks: [string, string][] }
> = {
  strength: {
    title: "FIRE POWER",
    focus: ["POWER", "LOAD", "EXPLOSION", "CONTROL"],
    blocks: [
      ["ACTIVATION", "05:00"],
      ["STRENGTH", "12:00"],
      ["POWER", "10:00"],
      ["FINISHER", "05:00"],
    ],
  },
  flow: {
    title: "DYNAMIC FLOW",
    focus: ["MOBILITY", "BREATH", "CONTROL", "BALANCE"],
    blocks: [
      ["BREATH", "03:00"],
      ["MOBILITY", "10:00"],
      ["SEQUENCE", "12:00"],
      ["RESET", "05:00"],
    ],
  },
  endurance: {
    title: "INTERVAL ENGINE",
    focus: ["PACE", "INTERVAL", "BREATH", "RHYTHM"],
    blocks: [
      ["WARM-UP", "05:00"],
      ["INTERVALS", "15:00"],
      ["TEMPO", "08:00"],
      ["COOLDOWN", "05:00"],
    ],
  },
  combat: {
    title: "PRESSURE ENGINE",
    focus: ["CORE", "ROTATION", "GRIP", "CONDITIONING"],
    blocks: [
      ["PREP", "05:00"],
      ["TECHNIQUE", "08:00"],
      ["WORK", "16:00"],
      ["FINISHER", "05:00"],
    ],
  },
};

export function DisciplineExperience({
  disciplineId,
  onBack,
  onDashboard,
}: {
  disciplineId: string;
  onBack: () => void;
  onDashboard: () => void;
}) {
  const discipline =
    disciplines.find((item) => item.id === disciplineId) ?? disciplines[0];
  const theme = identity[discipline.id] ?? identity.strength;
  const session = sessions[discipline.id] ?? sessions.strength;
  const [stage, setStage] = useState<Stage>("home");
  const [level, setLevel] = useState<Level>(2);
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState<HiiTPhase>("work");
  const [seconds, setSeconds] = useState(hiitIntervals[2].work);
  const [round, setRound] = useState(1);
  const [block, setBlock] = useState(2);
  const selectedLevel = levelInfo[level];
  const interval = hiitIntervals[level];
  const reward = Math.round(
    200 * 1.5 * Number(selectedLevel.multiplier.replace("×", "")),
  );

  useEffect(() => {
    if (stage !== "player" || !running) return;
    const timer = window.setInterval(() => {
      setSeconds((current) => {
        if (current > 1) return current - 1;
        playAlertTone();
        if (phase === "work") {
          setPhase("rest");
          return interval.rest;
        }
        setPhase("work");
        setRound((currentRound) => currentRound + 1);
        return interval.work;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [interval.rest, interval.work, phase, running, stage]);

  const accentStyle = useMemo(
    () =>
      ({
        "--discipline-accent": theme.accent,
        "--discipline-bright": theme.bright,
      }) as React.CSSProperties,
    [theme],
  );
  const goLevel = () => setStage("levels");
  const goPreview = () => setStage("preview");
  const startHiitSession = () => {
    setPhase("work");
    setSeconds(interval.work);
    setRound(1);
    setBlock(1);
    setStage("player");
    setRunning(true);
  };

  if (stage === "player") {
    return (
      <div className="h-full flex flex-col bg-bg" style={accentStyle}>
        <div className="px-5 pt-5">
          <div className="flex items-center justify-between">
            <button onClick={() => setStage("preview")} className="text-sub">
              <ArrowLeft width={22} height={22} />
            </button>
            <MicroLabel style={{ color: theme.bright }}>
              {discipline.name} · BLOCK {block} / 4 · ROUND {round}
            </MicroLabel>
            <button onClick={() => setRunning(false)} className="text-sub">
              <PauseIcon width={18} height={18} />
            </button>
          </div>
          <ProgressBar
            value={(block / 4) * 100}
            className="mt-4"
            color={theme.accent}
          />
        </div>
        <div className="flex-1 overflow-y-auto scroll-area px-5 pt-6">
          <MicroLabel style={{ color: theme.bright }}>
            Exercise {block + 1} / 08
          </MicroLabel>
          <h1 className="font-display uppercase tracked text-[30px] font-700 mt-2">
            {discipline.id === "combat"
              ? "SPRAWL TO BASE"
              : discipline.id === "flow"
                ? "COSSACK FLOW"
                : discipline.id === "endurance"
                  ? "TEMPO INTERVAL"
                  : "EXPLOSIVE SQUAT"}
          </h1>
          <Card
            className="relative overflow-hidden h-48 mt-5"
            style={{ borderColor: `${theme.accent}80` }}
          >
            <Photo
              src={discipline.img}
              alt="Exercise demonstration"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
              <span className="font-mono text-[10px] tracking-[0.16em] text-white/70">
                EXERCISE VIDEO LOOP
              </span>
            </div>
          </Card>
          <div className="grid grid-cols-3 gap-2.5 mt-5">
            {[
              ["3", "SETS"],
              [`${interval.work}s`, "WORK"],
              [`${interval.rest}s`, "REST"],
            ].map(([value, label]) => (
              <Card key={label} className="p-3 text-center">
                <strong className="font-display text-[20px]">{value}</strong>
                <MicroLabel className="block mt-1">{label}</MicroLabel>
              </Card>
            ))}
          </div>
          <div className="flex justify-center my-8">
            <div
              className="relative h-48 w-48 rounded-full border-[10px] flex items-center justify-center"
              style={{
                borderColor: `${theme.accent}40`,
                boxShadow: `0 0 35px -15px ${theme.accent}`,
              }}
            >
              <div
                className="absolute inset-[-10px] rounded-full border-[10px] border-transparent"
                style={{
                  borderTopColor: theme.bright,
                  transform: "rotate(35deg)",
                }}
              />
              <div className="text-center">
                <div className="font-display text-[50px] font-700 tabular-nums">
                  00:{String(seconds).padStart(2, "0")}
                </div>
                <MicroLabel style={{ color: theme.bright }}>
                  {!running ? "PAUSED" : phase === "work" ? "WORK" : "REST"}
                </MicroLabel>
              </div>
            </div>
          </div>
          <Card
            className="p-4"
            style={{
              borderColor: `${theme.accent}60`,
              background: `${theme.accent}0d`,
            }}
          >
            <MicroLabel style={{ color: theme.bright }}>LIVE XP</MicroLabel>
            <div className="font-display text-[24px] text-ink mt-1">
              +186 XP
            </div>
            <p className="text-[12px] text-sub mt-1">
              {phase === "work"
                ? `${interval.work}s work · ${interval.rest}s rest`
                : "Recover your breath. Next work interval is coming."}
            </p>
          </Card>
        </div>
        <div className="px-5 pb-6 pt-3 flex items-center justify-center gap-4">
          <button
            onClick={() => setBlock((current) => Math.max(1, current - 1))}
            className="font-mono text-[10px] text-sub"
          >
            PREVIOUS
          </button>
          <button
            onClick={() => setRunning((current) => !current)}
            className="h-14 w-14 rounded-full flex items-center justify-center text-black"
            style={{ background: theme.bright }}
          >
            {running ? (
              <PauseIcon width={22} height={22} />
            ) : (
              <PlayIcon width={22} height={22} />
            )}
          </button>
          <button
            onClick={() =>
              block < 4
                ? (() => {
                    setBlock((current) => current + 1);
                    setPhase("work");
                    setSeconds(interval.work);
                    setRound(1);
                  })()
                : setStage("complete")
            }
            className="font-mono text-[10px] text-sub"
          >
            NEXT
          </button>
        </div>
      </div>
    );
  }

  if (stage === "complete") {
    return (
      <div
        className="h-full flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
        style={accentStyle}
      >
        <div
          className="discipline-complete-glow absolute h-72 w-72 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${theme.accent}35 0%, transparent 68%)`,
          }}
        />
        <div className="relative h-28 w-28 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={`${theme.accent}35`}
              strokeWidth="5"
            />
            <circle
              className="discipline-complete-ring"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={theme.bright}
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="283"
            />
          </svg>
          <span
            className="discipline-complete-check"
            style={{ color: theme.bright }}
          >
            <CheckIcon width={42} height={42} />
          </span>
        </div>
        <div className="discipline-complete-copy">
          <MicroLabel className="mt-6" style={{ color: theme.bright }}>
            SESSION COMPLETE
          </MicroLabel>
          <h1 className="font-display uppercase tracked text-[28px] mt-2">
            {session.title}
          </h1>
          <div
            className="font-display text-[42px] mt-5"
            style={{ color: theme.bright }}
          >
            +{reward} XP
          </div>
          <p className="text-[12px] text-sub mt-2">
            DISCIPLINE BONUS · +50% XP
          </p>
          <ProgressBar
            value={87}
            color={theme.accent}
            className="w-full mt-7"
          />
          <p className="font-mono text-[10px] text-muted mt-2">
            {theme.xp + reward} / 2,500 XP
          </p>
          <div className="mt-8 w-full space-y-2">
            <Button full onClick={() => setStage("home")}>
              Return to discipline
            </Button>
            <Button full variant="secondary" onClick={onDashboard}>
              Back to dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="h-full overflow-y-auto scroll-area pb-8"
      style={accentStyle}
    >
      <div className="relative h-56">
        <Photo
          src={discipline.img}
          alt={discipline.name}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-black/10" />
        <button
          onClick={onBack}
          className="absolute top-5 left-5 h-10 w-10 rounded-full bg-black/55 flex items-center justify-center text-ink"
        >
          <ArrowLeft width={20} height={20} />
        </button>
        <div className="absolute bottom-5 left-5">
          <MicroLabel style={{ color: theme.bright }}>
            {discipline.element.toUpperCase()} DISCIPLINE
          </MicroLabel>
          <h1 className="font-display uppercase tracked text-[30px] font-700 mt-1">
            {discipline.name}
          </h1>
          <p className="text-[13px] text-sub mt-1">{discipline.tagline}</p>
        </div>
      </div>
      <div className="px-5 pt-5 space-y-5">
        <Card className="p-4" style={{ borderColor: `${theme.accent}80` }}>
          <div className="flex items-center justify-between">
            <div>
              <MicroLabel>SPECIAL TRAINING MODE</MicroLabel>
              <p className="text-[12px] text-sub mt-1">
                Discipline sessions earn additional XP.
              </p>
            </div>
            <div className="text-right">
              <MicroLabel style={{ color: theme.bright }}>XP BOOST</MicroLabel>
              <div
                className="font-display text-[24px]"
                style={{ color: theme.bright }}
              >
                +50%
              </div>
            </div>
          </div>
        </Card>
        <div>
          <div className="flex items-end justify-between">
            <MicroLabel>{discipline.name} LEVEL</MicroLabel>
            <span
              className="font-mono text-[10px]"
              style={{ color: theme.bright }}
            >
              LV. 04
            </span>
          </div>
          <ProgressBar
            value={(theme.xp / 2500) * 100}
            color={theme.accent}
            className="mt-2"
          />
          <div className="flex justify-between font-mono text-[9px] text-muted mt-1">
            <span>{theme.xp.toLocaleString()} / 2,500 XP</span>
            <span>{theme.streak} day streak</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <Card className="p-3">
            <MicroLabel>SESSIONS</MicroLabel>
            <div className="font-display text-[22px] mt-1">
              {theme.sessions}
            </div>
          </Card>
          <Card className="p-3">
            <MicroLabel>TOTAL TIME</MicroLabel>
            <div className="font-display text-[18px] mt-1">7H 42M</div>
          </Card>
          <Card className="p-3">
            <MicroLabel>BEST</MicroLabel>
            <div className="font-display text-[18px] mt-1">LEVEL 3</div>
          </Card>
        </div>
        {stage === "home" && (
          <Button full onClick={goLevel}>
            Choose your level
          </Button>
        )}
        {stage === "levels" && (
          <div>
            <MicroLabel>CHOOSE YOUR LEVEL</MicroLabel>
            <p className="text-[12px] text-sub mt-1 mb-3">
              Select the intensity and complexity for today&apos;s session.
            </p>
            <div className="space-y-3">
              {([1, 2, 3] as Level[]).map((item) => {
                const info = levelInfo[item];
                return (
                  <Card
                    key={item}
                    className="p-4"
                    selected={level === item}
                    onClick={() => setLevel(item)}
                    style={{
                      borderColor: level === item ? theme.accent : undefined,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="font-display text-[28px]"
                        style={{
                          color: level === item ? theme.bright : undefined,
                        }}
                      >
                        0{item}
                      </div>
                      <div className="flex-1">
                        <div className="font-display uppercase tracked-sm text-[17px]">
                          {info.name}
                        </div>
                        <p className="text-[11px] text-sub mt-1">
                          {info.tagline}
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Chip>{info.duration}</Chip>
                          <Chip tone="gold">+{info.xp} XP</Chip>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            <Button full className="mt-4" onClick={goPreview}>
              Select level {level}
            </Button>
          </div>
        )}
        {stage === "preview" && (
          <div>
            <div className="flex items-end justify-between">
              <div>
                <MicroLabel>TODAY&apos;S SESSION</MicroLabel>
                <h2 className="font-display uppercase tracked-sm text-[22px] mt-1">
                  {session.title}
                </h2>
              </div>
              <span
                className="font-mono text-[10px]"
                style={{ color: theme.bright }}
              >
                LEVEL {level}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              {[
                ["34 MIN", "TIME"],
                ["8", "EXERCISES"],
                [`${reward}`, "EST. XP"],
              ].map(([value, label]) => (
                <Card key={label} className="p-3 text-center">
                  <div className="font-display text-[20px]">{value}</div>
                  <MicroLabel className="block mt-1">{label}</MicroLabel>
                </Card>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              {session.blocks.map(([name, duration], index) => (
                <div
                  key={name}
                  className="flex items-center gap-3 border-l-2 pl-3"
                  style={{ borderColor: theme.accent }}
                >
                  <span className="font-mono text-[10px] text-muted">
                    0{index + 1}
                  </span>
                  <span className="flex-1 font-display uppercase text-[13px]">
                    {name}
                  </span>
                  <span className="font-mono text-[10px] text-sub">
                    {duration}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {session.focus.map((focus) => (
                <Chip key={focus} tone="gold">
                  {focus}
                </Chip>
              ))}
            </div>
            <Button
              full
              className="mt-5"
              onClick={() => {
                startHiitSession();
              }}
            >
              Start session
            </Button>
            <Button
              full
              variant="secondary"
              className="mt-2"
              onClick={() => setStage("levels")}
            >
              Change level
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
