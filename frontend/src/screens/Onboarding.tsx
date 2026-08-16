import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Chip,
  Field,
  HexBadge,
  MicroLabel,
  ProgressBar,
  Select,
} from "../components/ui";
import { LogoMark, Wordmark } from "../components/Logo";
import { ElementGlyph, elementMeta } from "../components/ElementGlyph";
import { soon } from "../components/toast";
import { Photo } from "../components/Photo";
import {
  AppleIcon,
  ArrowLeft,
  BoltIcon,
  CheckIcon,
  ChevronRight,
  GoogleIcon,
  HexIcon,
  MoveIcon,
  StackIcon,
  TargetIcon,
} from "../components/icons";
import {
  assessmentModules,
  assessmentTests,
  disciplines,
  goals,
  weeklyRoutine,
} from "../data";
import { useLang, type Lang } from "../i18n";

const goalIcon: Record<string, typeof BoltIcon> = {
  bolt: BoltIcon,
  move: MoveIcon,
  stack: StackIcon,
  hex: HexIcon,
};
const modIcon: Record<string, typeof BoltIcon> = {
  move: MoveIcon,
  stack: StackIcon,
  target: TargetIcon,
  bolt: BoltIcon,
};

function Shell({
  step,
  total,
  onBack,
  children,
}: {
  step?: number;
  total?: number;
  onBack?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full">
      {(onBack || step) && (
        <div className="flex items-center gap-4 px-5 pt-4 pb-2">
          {onBack ? (
            <button onClick={onBack} className="text-sub hover:text-ink -ml-1">
              <ArrowLeft width={22} height={22} />
            </button>
          ) : (
            <span className="w-[22px]" />
          )}
          {step && total && (
            <div className="flex-1 flex gap-1.5">
              {Array.from({ length: total }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full ${
                    i < step ? "bg-gold" : "bg-elevated"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
      <div className="flex-1 overflow-y-auto scroll-area px-5 pb-6">
        {children}
      </div>
    </div>
  );
}

/* ---------------- Language chooser ---------------- */
const LANGS: { id: Lang; native: string; sub: string }[] = [
  { id: "en", native: "English", sub: "English" },
  { id: "es", native: "Español", sub: "Spanish" },
  { id: "pt", native: "Português", sub: "Português (Brasil)" },
];
export function LanguageScreen({ onNext }: { onNext: () => void }) {
  const { lang, setLang, t } = useLang();
  return (
    <div className="h-full flex flex-col hex-field">
      <div className="flex-1 flex flex-col justify-center px-6">
        <div className="fade-up">
          <div className="flex justify-center mb-8">
            <LogoMark size={56} />
          </div>
          <h1 className="font-display uppercase tracked text-[24px] font-700 text-center leading-tight">
            {t("lang.title")}
          </h1>
          <p className="text-[13px] text-sub text-center mt-2 mb-8">
            {t("lang.subtitle")}
          </p>

          <div className="space-y-3">
            {LANGS.map((l) => {
              const on = lang === l.id;
              return (
                <Card
                  key={l.id}
                  onClick={() => setLang(l.id)}
                  selected={on}
                  className="p-4 flex items-center gap-4"
                >
                  <span className="font-mono uppercase tracking-[0.14em] text-[11px] text-muted w-7">
                    {l.id}
                  </span>
                  <div className="flex-1">
                    <div
                      className={`font-display uppercase tracked-sm text-[17px] font-700 ${on ? "text-gold-hi" : "text-ink"}`}
                    >
                      {l.native}
                    </div>
                    <div className="font-mono text-[10px] text-muted">
                      {l.sub}
                    </div>
                  </div>
                  <span
                    className={`h-6 w-6 rounded-full border flex items-center justify-center transition-colors ${
                      on
                        ? "bg-gold border-gold text-bg"
                        : "border-border-strong text-transparent"
                    }`}
                  >
                    <CheckIcon width={14} height={14} strokeWidth={2.5} />
                  </span>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-6 pb-8">
        <Button full onClick={onNext}>
          {t("lang.continue")}
        </Button>
      </div>
    </div>
  );
}

/* ---------------- Splash ---------------- */
export function Splash({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className="h-full flex flex-col items-center justify-center hex-field relative">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_45%,rgba(197,138,34,0.08),transparent)]" />
      <div className="fade-up flex flex-col items-center relative">
        <LogoMark size={72} />
        <div className="mt-5">
          <Wordmark size={30} />
        </div>
        <p className="mt-5 text-center text-[12px] leading-relaxed text-sub max-w-[220px]">
          Built on the elements.
          <br />
          Engineered for performance.
        </p>
      </div>
      <div className="absolute bottom-14 w-24 h-0.5 bg-elevated overflow-hidden rounded-full">
        <div
          className="h-full bg-gradient-to-r from-gold-dark to-gold-hi"
          style={{
            animation: "ec-loadbar 2.1s cubic-bezier(0.4,0,0.2,1) forwards",
            width: 0,
          }}
        />
      </div>
    </div>
  );
}

/* ---------------- Welcome ---------------- */
export function Welcome({
  onCreate,
  onSignIn,
}: {
  onCreate: () => void;
  onSignIn: () => void;
}) {
  return (
    <div className="h-full flex flex-col">
      <div className="relative flex-1">
        <Photo
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=1100&fit=crop&auto=format&sat=-100"
          alt="Athlete training in low light"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/30 to-bg" />
        <div className="relative pt-10 px-6">
          <MicroLabel>Welcome to</MicroLabel>
          <h1 className="font-display uppercase tracked text-[30px] font-700 leading-tight mt-1">
            Element
            <br />
            <span className="text-gold">Core</span>
          </h1>
          <p className="font-display uppercase tracked-sm text-sub text-[13px] mt-2">
            Train. Evolve. Become.
          </p>
        </div>
      </div>
      <div className="px-6 pb-8 pt-4 relative">
        <p className="text-[13px] leading-relaxed text-sub text-center mb-5">
          Built on the elements. Engineered for performance.
        </p>
        <Button full onClick={onCreate}>
          Create Account
        </Button>
        <div className="h-3" />
        <Button variant="secondary" full onClick={onSignIn}>
          Sign In
        </Button>
        <p className="text-center text-[12px] text-muted mt-5">
          Already part of Element Core?{" "}
          <button onClick={onSignIn} className="text-gold-hi">
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

/* ---------------- Create account ---------------- */
export function CreateAccount({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [agree, setAgree] = useState(true);
  const { lang } = useLang();
  const portuguese = lang === "pt";
  return (
    <Shell step={1} total={7} onBack={onBack}>
      <h1 className="font-display uppercase tracked text-[26px] font-700 mt-2 mb-6">
        {portuguese ? "Criar conta" : "Create Account"}
      </h1>
      <div className="space-y-4">
        <Field
          label={portuguese ? "Nome completo" : "Full name"}
          placeholder="Lucas Terra"
          defaultValue="Lucas Terra"
        />
        <Field
          label="Email"
          type="email"
          placeholder="lucas@elementcore.app"
          defaultValue="lucas@elementcore.app"
        />
        <Field
          label={portuguese ? "Senha" : "Password"}
          password
          placeholder="••••••••"
          defaultValue="performance"
        />
      </div>
      <div className="mt-5">
        <Checkbox checked={agree} onChange={setAgree}>
          {portuguese ? "Concordo com os " : "I agree to the "}
          <span className="text-gold-hi">
            {portuguese ? "Termos de Uso" : "Terms of Use"}
          </span>
          {portuguese ? " e a " : " and "}
          <span className="text-gold-hi">
            {portuguese ? "Política de Privacidade" : "Privacy Policy"}
          </span>
        </Checkbox>
      </div>
      <div className="mt-6">
        <Button
          full
          onClick={onNext}
          disabled={!agree}
          className={!agree ? "opacity-50" : ""}
        >
          Create Account
        </Button>
      </div>
      <div className="flex items-center gap-3 my-6">
        <div className="h-px flex-1 bg-border" />
        <MicroLabel>Or continue with</MicroLabel>
        <div className="h-px flex-1 bg-border" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onNext}
          className="h-12 rounded-[10px] border border-border-strong flex items-center justify-center gap-2 text-ink text-[13px] hover:border-gold/60 transition-colors"
        >
          <AppleIcon /> Apple
        </button>
        <button
          onClick={onNext}
          className="h-12 rounded-[10px] border border-border-strong flex items-center justify-center gap-2 text-ink text-[13px] hover:border-gold/60 transition-colors"
        >
          <GoogleIcon /> Google
        </button>
      </div>
      <p className="text-center text-[12px] text-muted mt-6">
        Already have an account? <span className="text-gold-hi">Sign in</span>
      </p>
    </Shell>
  );
}

/* ---------------- Primary goal ---------------- */
export function GoalScreen({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [sel, setSel] = useState<string[]>(["power"]);
  const toggle = (id: string) =>
    setSel((s) =>
      s.includes(id)
        ? s.filter((x) => x !== id)
        : s.length < 2
          ? [...s, id]
          : s,
    );
  return (
    <Shell step={2} total={7} onBack={onBack}>
      <h1 className="font-display uppercase tracked text-[24px] font-700 mt-2 leading-tight">
        What is your
        <br />
        primary focus?
      </h1>
      <p className="text-[13px] text-sub mt-2 mb-6">Select up to 2 areas</p>
      <div className="grid grid-cols-2 gap-3">
        {goals.map((g) => {
          const on = sel.includes(g.id);
          const meta = elementMeta[g.element];
          return (
            <Card
              key={g.id}
              onClick={() => toggle(g.id)}
              className="p-5 aspect-square flex flex-col justify-between"
              style={
                on
                  ? {
                      borderColor: meta.color,
                      boxShadow: `inset 0 0 28px -10px ${meta.color}`,
                    }
                  : undefined
              }
            >
              <ElementGlyph element={g.element} size={40} active={on} />
              <div>
                <div className="font-display uppercase tracked-sm text-[18px] font-600 flex items-baseline gap-1.5">
                  {g.name}
                  <span
                    className="font-mono text-[9px] tracking-[0.12em]"
                    style={{ color: on ? meta.hi : "var(--color-muted)" }}
                  >
                    {meta.label}
                  </span>
                </div>
                <div className="text-[11px] text-muted mt-0.5">{g.desc}</div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="mt-7">
        <Button full onClick={onNext}>
          Continue
        </Button>
      </div>
    </Shell>
  );
}

/* ---------------- Discipline ---------------- */
export function DisciplineScreen({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [sel, setSel] = useState("strength");
  const selectedDiscipline =
    disciplines.find((d) => d.id === sel) ?? disciplines[0];
  const specializedPrograms: Record<
    string,
    { name: string; detail: string }[]
  > = {
    strength: [
      { name: "Power Build", detail: "Força, potência e progressão de carga" },
      {
        name: "Athletic Base",
        detail: "Explosão, condicionamento e performance",
      },
    ],
    flow: [
      { name: "Mobility Flow", detail: "Mobilidade, controle e amplitude" },
      {
        name: "Movement Practice",
        detail: "Coordenação, respiração e consciência corporal",
      },
    ],
    endurance: [
      {
        name: "Board-Ride Engine",
        detail: "Resistência, equilíbrio e adaptação",
      },
      { name: "Endurance Base", detail: "Cardio, ritmo e recuperação" },
    ],
    combat: [
      { name: "Grappling Core", detail: "Pressão, controle e força de base" },
      {
        name: "Balance & Flow",
        detail: "Yoga, corrida, natação e corpo livre para mente e equilíbrio",
      },
    ],
  };
  const activePrograms = specializedPrograms[sel] ?? [];
  return (
    <Shell step={3} total={7} onBack={onBack}>
      <h1 className="font-display uppercase tracked text-[24px] font-700 mt-2 leading-tight">
        What&apos;s your
        <br />
        training path?
      </h1>
      <p className="text-[13px] text-sub mt-2 mb-6">
        Choose the discipline that best represents your training.
      </p>
      <div className="space-y-3">
        {disciplines.map((d) => {
          const on = sel === d.id;
          const meta = elementMeta[d.element];
          return (
            <Card
              key={d.id}
              onClick={() => setSel(d.id)}
              className="relative overflow-hidden h-[116px]"
              style={
                on
                  ? {
                      borderColor: meta.color,
                      boxShadow: `inset 0 0 40px -14px ${meta.color}`,
                    }
                  : undefined
              }
            >
              <Photo src={d.img} alt={d.name} className="absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/20" />
              <div className="relative h-full flex flex-col justify-center px-5">
                <div className="flex items-center gap-2.5">
                  <ElementGlyph element={d.element} size={26} active={on} />
                  <div className="font-display uppercase tracked-sm text-[20px] font-700">
                    {d.name}
                  </div>
                  <span
                    className="font-mono text-[9px] tracking-[0.14em] uppercase"
                    style={{ color: on ? meta.hi : "var(--color-muted)" }}
                  >
                    {meta.label}
                  </span>
                </div>
                <div className="text-[12px] text-sub mt-1">{d.tagline}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-gold-hi mt-1.5">
                  {d.modes}
                </div>
              </div>
              {on && (
                <div
                  className="absolute top-3 right-3 h-6 w-6 rounded-full flex items-center justify-center text-bg"
                  style={{ background: meta.color }}
                >
                  <CheckIcon width={14} height={14} strokeWidth={2.5} />
                </div>
              )}
            </Card>
          );
        })}
      </div>
      <div className="mt-6">
        <div className="flex items-end justify-between mb-3">
          <div>
            <MicroLabel>Specialized programs</MicroLabel>
            <h2 className="font-display uppercase tracked-sm text-[17px] font-600 mt-1">
              {selectedDiscipline.name} path
            </h2>
          </div>
          <span
            className="font-mono text-[9px] uppercase tracking-[0.12em]"
            style={{ color: elementMeta[selectedDiscipline.element].hi }}
          >
            {elementMeta[selectedDiscipline.element].label}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {activePrograms.map((program) => (
            <Card
              key={program.name}
              className="p-3.5"
              style={{
                borderColor: `${elementMeta[selectedDiscipline.element].color}80`,
                boxShadow: `inset 0 0 22px -14px ${elementMeta[selectedDiscipline.element].color}`,
              }}
            >
              <ElementGlyph
                element={selectedDiscipline.element}
                size={22}
                active
              />
              <div className="font-display uppercase tracked-sm text-[13px] font-600 mt-2">
                {program.name}
              </div>
              <p className="text-[10px] text-muted leading-relaxed mt-1">
                {program.detail}
              </p>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-7">
        <Button full onClick={onNext}>
          Continue
        </Button>
      </div>
    </Shell>
  );
}

/* ---------------- Assessment (interactive) ---------------- */
export function AssessmentScreen({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  // Scores collected per test, keyed `${moduleId}.${testId}`.
  const [answers, setAnswers] = useState<Record<string, number>>({});
  // Active run: a queue of module ids and the current test cursor. null = intro.
  const [run, setRun] = useState<{
    queue: string[];
    qi: number;
    ti: number;
  } | null>(null);
  const [showResults, setShowResults] = useState(false);

  const moduleScore = (id: string) => {
    const tests = assessmentTests[id].tests;
    const vals = tests
      .map((t) => answers[`${id}.${t.id}`])
      .filter((v): v is number => v != null);
    if (!vals.length) return null;
    return Math.round(vals.reduce((s, v) => s + v, 0) / vals.length);
  };
  const doneCount = assessmentModules.filter(
    (m) => moduleScore(m.id) != null,
  ).length;

  const startRun = (queue: string[]) => setRun({ queue, qi: 0, ti: 0 });

  const answer = (score: number) => {
    if (!run) return;
    const modId = run.queue[run.qi];
    const test = assessmentTests[modId].tests[run.ti];
    setAnswers((a) => ({ ...a, [`${modId}.${test.id}`]: score }));

    const lastTest = run.ti >= assessmentTests[modId].tests.length - 1;
    const lastModule = run.qi >= run.queue.length - 1;
    if (!lastTest) {
      setRun({ ...run, ti: run.ti + 1 });
    } else if (!lastModule) {
      setRun({ ...run, qi: run.qi + 1, ti: 0 });
    } else {
      setRun(null);
      if (run.queue.length > 1) setShowResults(true);
    }
  };

  /* ---- Results ---- */
  if (showResults) {
    return (
      <Shell step={4} total={7} onBack={() => setShowResults(false)}>
        <div className="fade-up">
          <span className="font-mono uppercase tracking-[0.16em] text-[10px] text-success">
            Assessment complete
          </span>
          <h1 className="font-display uppercase tracked text-[24px] font-700 mt-2 mb-1">
            Your Baseline
          </h1>
          <p className="text-[13px] text-sub mb-6">
            This calibrates your starting program.
          </p>
          <div className="space-y-3">
            {assessmentModules.map((m) => {
              const meta = elementMeta[assessmentTests[m.id].element];
              const score = moduleScore(m.id) ?? 0;
              return (
                <Card key={m.id} className="p-4 flex items-center gap-4">
                  <ElementGlyph
                    element={assessmentTests[m.id].element}
                    size={34}
                    active
                  />
                  <div className="flex-1">
                    <div className="font-display uppercase tracked-sm text-[14px] font-600 flex items-baseline gap-1.5">
                      {assessmentTests[m.id].metric}
                      <span
                        className="font-mono text-[9px] tracking-[0.12em]"
                        style={{ color: meta.hi }}
                      >
                        {meta.label}
                      </span>
                    </div>
                    <ProgressBar
                      value={score}
                      className="mt-2"
                      color={meta.color}
                    />
                  </div>
                  <span
                    className="font-display text-[22px] font-700 tabular-nums"
                    style={{ color: meta.hi }}
                  >
                    {score}
                  </span>
                </Card>
              );
            })}
          </div>
          <div className="mt-7">
            <Button full onClick={onNext}>
              Continue
            </Button>
          </div>
        </div>
      </Shell>
    );
  }

  /* ---- Active test ---- */
  if (run) {
    const modId = run.queue[run.qi];
    const mod = assessmentTests[modId];
    const test = mod.tests[run.ti];
    const meta = elementMeta[mod.element];
    // Progress across the whole active queue.
    const totalTests = run.queue.reduce(
      (s, id) => s + assessmentTests[id].tests.length,
      0,
    );
    const doneTests =
      run.queue
        .slice(0, run.qi)
        .reduce((s, id) => s + assessmentTests[id].tests.length, 0) + run.ti;

    return (
      <Shell onBack={() => setRun(null)}>
        <div className="flex-1 flex flex-col fade">
          <div className="flex gap-1.5 mb-6">
            {Array.from({ length: totalTests }).map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full ${i <= doneTests ? "" : "bg-elevated"}`}
                style={i <= doneTests ? { background: meta.color } : undefined}
              />
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <ElementGlyph element={mod.element} size={24} active />
            <span
              className="font-mono uppercase tracking-[0.14em] text-[10px]"
              style={{ color: meta.hi }}
            >
              {mod.metric} · Test {run.ti + 1} of {mod.tests.length}
            </span>
          </div>

          <h1 className="font-display uppercase tracked-sm text-[26px] font-700 mt-4">
            {test.name}
          </h1>
          <p className="text-[14px] text-sub mt-3 leading-relaxed">
            {test.cue}
          </p>

          <div className="mt-7 space-y-3">
            <MicroLabel>How did it go?</MicroLabel>
            {test.options.map((o) => (
              <Card
                key={o.label}
                onClick={() => answer(o.score)}
                className="p-4 flex items-center gap-3.5"
              >
                <span className="h-7 w-7 rounded-full border border-border-strong flex items-center justify-center shrink-0 text-transparent">
                  <CheckIcon width={13} height={13} />
                </span>
                <span className="font-display uppercase tracked-sm text-[14px] font-600 text-ink">
                  {o.label}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </Shell>
    );
  }

  /* ---- Intro / module list ---- */
  return (
    <Shell step={4} total={7} onBack={onBack}>
      <h1 className="font-display uppercase tracked text-[24px] font-700 mt-2">
        Baseline Assessment
      </h1>
      <p className="text-[13px] text-sub mt-2 mb-6">
        Let&apos;s understand your starting point.
      </p>
      <div className="space-y-3">
        {assessmentModules.map((m) => {
          const Icon = modIcon[m.icon];
          const meta = elementMeta[assessmentTests[m.id].element];
          const score = moduleScore(m.id);
          const complete = score != null;
          return (
            <Card
              key={m.id}
              className="p-4 flex items-center gap-4"
              onClick={() => startRun([m.id])}
              style={complete ? { borderColor: meta.color } : undefined}
            >
              <HexBadge size={44} active={complete}>
                <Icon width={18} height={18} />
              </HexBadge>
              <div className="flex-1">
                <div className="font-display uppercase tracked-sm text-[15px] font-600">
                  {m.name}
                </div>
                <div className="text-[12px] text-muted">{m.desc}</div>
              </div>
              {complete ? (
                <span
                  className="font-display text-[18px] font-700 tabular-nums"
                  style={{ color: meta.hi }}
                >
                  {score}
                </span>
              ) : (
                <ChevronRight width={18} height={18} className="text-muted" />
              )}
            </Card>
          );
        })}
      </div>
      <p className="text-center font-mono text-[11px] text-muted mt-6">
        {doneCount > 0
          ? `${doneCount} of ${assessmentModules.length} complete`
          : "Approximately 5–7 minutes"}
      </p>
      <div className="mt-4 space-y-3">
        <Button
          full
          onClick={() => startRun(assessmentModules.map((m) => m.id))}
        >
          {doneCount > 0 ? "Redo Full Assessment" : "Start Assessment"}
        </Button>
        {doneCount === assessmentModules.length ? (
          <Button variant="secondary" full onClick={() => setShowResults(true)}>
            View Results
          </Button>
        ) : doneCount > 0 ? (
          <Button variant="ghost" full onClick={onNext}>
            Skip remaining
          </Button>
        ) : null}
      </div>
    </Shell>
  );
}

/* ---------------- Training profile ---------------- */
const days = ["S", "M", "T", "W", "T", "F", "S"];
export function TrainingProfileScreen({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [exp, setExp] = useState("Intermediate");
  const [avail, setAvail] = useState("4–5 hours");
  const [session, setSession] = useState("45 min");
  const [picked, setPicked] = useState<number[]>([1, 3, 4]);
  return (
    <Shell step={5} total={7} onBack={onBack}>
      <h1 className="font-display uppercase tracked text-[24px] font-700 mt-2 mb-6">
        Tell us about
        <br />
        your training
      </h1>
      <div className="space-y-5">
        <Select
          label="Experience level"
          value={exp}
          onChange={setExp}
          options={["Beginner", "Intermediate", "Advanced", "Athlete"]}
        />
        <Select
          label="Weekly availability"
          value={avail}
          onChange={setAvail}
          options={["2–3 hours", "3–4 hours", "4–5 hours", "5+ hours"]}
        />
        <Select
          label="Session length"
          value={session}
          onChange={setSession}
          options={["20 min", "30 min", "45 min", "60 min"]}
        />
        <div>
          <MicroLabel>Preferred days</MicroLabel>
          <div className="flex gap-2 mt-2">
            {days.map((d, i) => {
              const on = picked.includes(i);
              return (
                <button
                  key={i}
                  onClick={() =>
                    setPicked((p) =>
                      on ? p.filter((x) => x !== i) : [...p, i],
                    )
                  }
                  className={`flex-1 h-11 rounded-[10px] font-display font-600 text-[14px] border transition-colors ${
                    on
                      ? "bg-gold text-bg border-gold"
                      : "border-border text-sub"
                  }`}
                >
                  {d}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Button full onClick={onNext}>
          Continue
        </Button>
      </div>
    </Shell>
  );
}

/* ---------------- Building plan ---------------- */
const steps = [
  "Analyzing assessment",
  "Mapping your weaknesses",
  "Balancing Power / Flex / Balance",
  "Creating your weekly structure",
];
export function BuildingPlan({ onDone }: { onDone: () => void }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (i >= steps.length) return;
    const t = setTimeout(() => setI((v) => v + 1), 850);
    return () => clearTimeout(t);
  }, [i]);
  const done = i >= steps.length;

  if (done) return <PlanReady onDone={onDone} />;

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 hex-field">
      <LogoMark size={56} />
      <h1 className="font-display uppercase tracked text-[20px] font-700 mt-6 mb-8">
        Building your plan
      </h1>
      <div className="w-full max-w-[280px] space-y-3">
        {steps.map((s, idx) => {
          const active = idx === i;
          const complete = idx < i;
          return (
            <div
              key={s}
              className={`flex items-center gap-3 transition-opacity ${idx <= i ? "opacity-100" : "opacity-30"}`}
            >
              <span
                className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                  complete
                    ? "bg-gold border-gold text-bg"
                    : active
                      ? "border-gold"
                      : "border-border"
                }`}
              >
                {complete ? (
                  <CheckIcon width={12} height={12} strokeWidth={2.5} />
                ) : active ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                ) : null}
              </span>
              <span
                className={`text-[13px] ${complete || active ? "text-ink" : "text-muted"}`}
              >
                {s}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlanReady({ onDone }: { onDone: () => void }) {
  const max = Math.max(...weeklyRoutine.map((d) => d.load));
  return (
    <Shell>
      <div className="fade-up pt-4">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono uppercase tracking-[0.16em] text-[10px] text-success">
            Your plan is ready
          </span>
          <h1 className="font-display uppercase tracked text-[24px] font-700 mt-2">
            Foundation I
          </h1>
        </div>
        <Card className="mt-6 p-5 flex items-center gap-4">
          <HexBadge size={56}>
            <HexIcon width={22} height={22} />
          </HexBadge>
          <div>
            <MicroLabel>Starting level</MicroLabel>
            <div className="font-display uppercase tracked-sm text-[18px] font-600">
              Foundation I
            </div>
            <p className="text-[12px] text-muted mt-1 leading-relaxed">
              Your training plan was built around your goals, assessment and
              availability.
            </p>
          </div>
        </Card>

        <div className="mt-6">
          <MicroLabel>Weekly routine</MicroLabel>
          <Card className="mt-2 p-5">
            <div className="flex items-end justify-between h-24 gap-2">
              {weeklyRoutine.map((d, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div className="w-full flex-1 flex items-end">
                    <div
                      className="w-full rounded-sm bg-gradient-to-t from-gold-dark to-gold-hi"
                      style={{ height: `${(d.load / max) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-[9px] text-muted">
                    {d.day[0]}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2 border-t border-border pt-4">
              {weeklyRoutine.slice(0, 5).map((d) => (
                <div key={d.day} className="flex justify-between text-[12px]">
                  <span className="text-sub">{d.day}</span>
                  <span className="font-display uppercase tracked-sm text-ink">
                    {d.focus}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6 space-y-3">
          <Button full onClick={onDone}>
            Start First Session
          </Button>
          <Button variant="secondary" full onClick={onDone}>
            View Plan
          </Button>
        </div>
      </div>
    </Shell>
  );
}

export { ProgressBar };
