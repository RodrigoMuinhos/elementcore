import type { Element } from './components/ElementGlyph'

export const user = {
  name: 'Alex Morgan',
  first: 'Alex',
  path: 'Grappling',
  level: 'Foundation I',
  levelNum: 12,
  levelTier: 'Control',
  coreScore: 78,
  xp: 8420,
  xpMax: 10000,
  streak: 12,
  bestStreak: 18,
  weeklyDone: 3,
  weeklyTarget: 5,
}

export const metrics: { key: string; element: Element; value: number; delta: string }[] = [
  { key: 'POWER', element: 'fire', value: 76, delta: '+2' },
  { key: 'FLEX', element: 'air', value: 68, delta: '+4' },
  { key: 'BALANCE', element: 'water', value: 81, delta: '+1' },
  { key: 'CORE', element: 'earth', value: 84, delta: '+3' },
]

export const goals: { id: string; name: string; element: Element; desc: string }[] = [
  { id: 'power', name: 'POWER', element: 'fire', desc: 'Strength · Explosiveness' },
  { id: 'flex', name: 'FLEX', element: 'air', desc: 'Mobility · Range' },
  { id: 'balance', name: 'BALANCE', element: 'water', desc: 'Stability · Coordination' },
  { id: 'core', name: 'CORE', element: 'earth', desc: 'Control · Foundation' },
]

// Four training paths, each complementary to one element from the goal step.
export const disciplines: {
  id: string
  name: string
  element: Element
  tagline: string
  modes: string
  img: string
}[] = [
  {
    id: 'strength',
    name: 'STRENGTH',
    element: 'fire',
    tagline: 'Lift. Explode. Overpower.',
    modes: 'Gym · Lifting · HIIT',
    img: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&h=600&fit=crop&auto=format',
  },
  {
    id: 'flow',
    name: 'FLOW',
    element: 'air',
    tagline: 'Breathe. Bend. Control.',
    modes: 'Yoga · Pilates · Mobility',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&auto=format',
  },
  {
    id: 'endurance',
    name: 'ENDURANCE',
    element: 'water',
    tagline: 'Pace. Flow. Endure.',
    modes: 'Running · Cycling · Swim',
    img: 'https://images.unsplash.com/photo-1782773560531-cadce8ecd88a?w=800&h=600&fit=crop&auto=format',
  },
  {
    id: 'combat',
    name: 'COMBAT',
    element: 'earth',
    tagline: 'Ground. Pressure. Dominate.',
    modes: 'BJJ · Boxing · Wrestling',
    img: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=800&h=600&fit=crop&auto=format',
  },
]

export const assessmentModules = [
  { id: 'mobility', name: 'MOBILITY', desc: 'Range & movement', icon: 'move' },
  { id: 'stability', name: 'STABILITY', desc: 'Control & balance', icon: 'stack' },
  { id: 'control', name: 'CONTROL', desc: 'Body awareness', icon: 'target' },
  { id: 'strength', name: 'STRENGTH', desc: 'Force & endurance', icon: 'bolt' },
]

/* ---------------- Baseline assessment tests ---------------- */
export type AssessTest = {
  id: string
  name: string
  cue: string
  options: { label: string; score: number }[]
}
export const assessmentTests: Record<
  string,
  { element: Element; metric: string; tests: AssessTest[] }
> = {
  mobility: {
    element: 'air',
    metric: 'FLEX',
    tests: [
      {
        id: 'deep-squat',
        name: 'Deep Squat',
        cue: 'Feet shoulder-width, squat as low as you can with your heels flat on the floor.',
        options: [
          { label: 'Stayed above parallel', score: 30 },
          { label: 'Reached parallel', score: 65 },
          { label: 'Full depth, heels down', score: 100 },
        ],
      },
      {
        id: 'shoulder-reach',
        name: 'Shoulder Reach',
        cue: 'One hand over the shoulder, the other up the back. Can your fingers meet?',
        options: [
          { label: 'A large gap remains', score: 30 },
          { label: 'Fingers nearly touch', score: 65 },
          { label: 'Hands clasp easily', score: 100 },
        ],
      },
      {
        id: 'toe-touch',
        name: 'Forward Fold',
        cue: 'Legs straight, hinge at the hips and reach toward the floor.',
        options: [
          { label: 'Mid-shin', score: 35 },
          { label: 'Fingertips to toes', score: 70 },
          { label: 'Palms flat on floor', score: 100 },
        ],
      },
    ],
  },
  stability: {
    element: 'water',
    metric: 'BALANCE',
    tests: [
      {
        id: 'single-leg',
        name: 'Single-Leg Stand',
        cue: 'Stand on one leg, eyes closed. How long before you wobble?',
        options: [
          { label: 'Under 10 seconds', score: 30 },
          { label: '10 – 25 seconds', score: 65 },
          { label: 'Over 25 seconds', score: 100 },
        ],
      },
      {
        id: 'half-kneel',
        name: 'Half-Kneel Balance',
        cue: 'Hold a half-kneeling position and stay steady without tipping.',
        options: [
          { label: 'Constant correction', score: 35 },
          { label: 'Mostly steady', score: 70 },
          { label: 'Rock solid', score: 100 },
        ],
      },
    ],
  },
  control: {
    element: 'earth',
    metric: 'CORE',
    tests: [
      {
        id: 'plank',
        name: 'Front Plank',
        cue: 'Hold a straight-body plank with braced core. How long can you hold form?',
        options: [
          { label: 'Under 30 seconds', score: 35 },
          { label: '30 – 60 seconds', score: 70 },
          { label: 'Over 60 seconds', score: 100 },
        ],
      },
      {
        id: 'dead-bug',
        name: 'Dead Bug',
        cue: 'Lower opposite arm and leg while keeping your lower back pinned down.',
        options: [
          { label: 'Back lifts off', score: 35 },
          { label: 'Some movement', score: 70 },
          { label: 'Spine stays flat', score: 100 },
        ],
      },
    ],
  },
  strength: {
    element: 'fire',
    metric: 'POWER',
    tests: [
      {
        id: 'push-ups',
        name: 'Max Push-Ups',
        cue: 'Full-range push-ups with good form, to technical failure.',
        options: [
          { label: 'Under 10', score: 35 },
          { label: '10 – 25', score: 70 },
          { label: 'Over 25', score: 100 },
        ],
      },
      {
        id: 'squat-jump',
        name: 'Squat Jump',
        cue: 'Explode from a squat into a vertical jump. How is your drive?',
        options: [
          { label: 'Low, heavy landing', score: 35 },
          { label: 'Solid height', score: 70 },
          { label: 'Explosive & controlled', score: 100 },
        ],
      },
    ],
  },
}

export const weeklyRoutine = [
  { day: 'Mon', focus: 'Strength', load: 0.9 },
  { day: 'Tue', focus: 'Mobility', load: 0.5 },
  { day: 'Wed', focus: 'Control', load: 0.7 },
  { day: 'Thu', focus: 'Recovery', load: 0.3 },
  { day: 'Fri', focus: 'Performance', load: 1 },
  { day: 'Sat', focus: 'Mobility', load: 0.4 },
  { day: 'Sun', focus: 'Rest', load: 0.15 },
]

export const weekTrack = [
  { d: 'M', state: 'done' },
  { d: 'T', state: 'done' },
  { d: 'W', state: 'done' },
  { d: 'T', state: 'today' },
  { d: 'F', state: 'todo' },
  { d: 'S', state: 'todo' },
  { d: 'S', state: 'todo' },
] as const

export const todaysSession = {
  title: 'Upper Body Power',
  category: 'Strength Focus',
  duration: '42 MIN',
  difficulty: 'INTERMEDIATE',
  meta: '6 exercises · 3 rounds',
  img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&h=600&fit=crop&auto=format',
}

export type Exercise = {
  name: string
  category: string
  detail: string
  sets: number
  reps: string
  rest: string
  target: string
  muscles: string[]
  difficulty: string
  equipment: string
  photo: string
  video: string
  duration: string
  instructions: string
  mistakes: string[]
  coachNote: string
  coach: string
}

const SAMPLE_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'

export const exercises: Exercise[] = [
  {
    name: 'Scapular Push-Up',
    category: 'Strength · Upper Body',
    detail: '12 reps',
    sets: 3,
    reps: '12 reps',
    rest: '45 sec',
    target: 'Shoulders',
    muscles: ['Serratus', 'Shoulders', 'Core'],
    difficulty: 'Intermediate',
    equipment: 'Bodyweight',
    photo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=800&h=600&fit=crop&auto=format',
    video: SAMPLE_VIDEO,
    duration: '0:48',
    instructions: 'Start in a high plank. Without bending the elbows, protract and retract the shoulder blades, keeping the core braced throughout.',
    mistakes: ['Bending the elbows', 'Sagging hips', 'Shrugging the traps'],
    coachNote: 'Move slowly — this primes scapular control for the pressing that follows.',
    coach: 'Rodrigo',
  },
  {
    name: 'Pike Push-Up',
    category: 'Strength · Shoulders',
    detail: '10 reps',
    sets: 3,
    reps: '10 reps',
    rest: '60 sec',
    target: 'Shoulders',
    muscles: ['Deltoids', 'Triceps', 'Upper chest'],
    difficulty: 'Intermediate',
    equipment: 'Bodyweight',
    photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format',
    video: SAMPLE_VIDEO,
    duration: '1:02',
    instructions: 'Hips high in an inverted V. Lower the crown of the head toward the floor, elbows tracking forward, then press back up.',
    mistakes: ['Flaring elbows wide', 'Hips dropping', 'Half range of motion'],
    coachNote: 'Stack the shoulders over the hands — the more vertical, the harder.',
    coach: 'Rodrigo',
  },
  {
    name: 'Explosive Push-Up',
    category: 'Power · Chest',
    detail: '8 reps',
    sets: 3,
    reps: '8 reps',
    rest: '90 sec',
    target: 'Chest',
    muscles: ['Chest', 'Shoulders', 'Core'],
    difficulty: 'Advanced',
    equipment: 'Bodyweight',
    photo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=800&h=600&fit=crop&auto=format',
    video: SAMPLE_VIDEO,
    duration: '0:55',
    instructions: 'Lower under control, then drive through the floor explosively so the hands leave the ground. Land soft and reset.',
    mistakes: ['Losing core tension', 'Landing with locked elbows', 'Rushing the descent'],
    coachNote: 'Drive through the floor and keep your core locked throughout the movement.',
    coach: 'Rodrigo',
  },
  {
    name: 'Plank Shoulder Tap',
    category: 'Core · Stability',
    detail: '20 reps',
    sets: 3,
    reps: '20 reps',
    rest: '45 sec',
    target: 'Core',
    muscles: ['Core', 'Obliques', 'Shoulders'],
    difficulty: 'Beginner',
    equipment: 'Bodyweight',
    photo: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=800&h=600&fit=crop&auto=format',
    video: SAMPLE_VIDEO,
    duration: '0:40',
    instructions: 'From a plank, tap the opposite shoulder while resisting rotation of the hips. Keep them square to the floor.',
    mistakes: ['Hips rocking side to side', 'Feet too narrow', 'Holding breath'],
    coachNote: 'Widen the feet if the hips rotate — stability first.',
    coach: 'Rodrigo',
  },
  {
    name: 'Hollow Body Hold',
    category: 'Core · Control',
    detail: '00:40',
    sets: 3,
    reps: '40 sec hold',
    rest: '60 sec',
    target: 'Core',
    muscles: ['Rectus abdominis', 'Hip flexors'],
    difficulty: 'Intermediate',
    equipment: 'Bodyweight',
    photo: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=800&h=600&fit=crop&auto=format',
    video: SAMPLE_VIDEO,
    duration: '0:38',
    instructions: 'Press the lower back into the floor, lift shoulders and legs, and hold a shallow banana shape. Breathe.',
    mistakes: ['Lower back arching off floor', 'Legs too low too soon', 'Neck straining'],
    coachNote: 'If the back arches, raise the legs higher — protect the spine.',
    coach: 'Rodrigo',
  },
  {
    name: 'Bear Crawl',
    category: 'Conditioning · Full Body',
    detail: '00:45',
    sets: 3,
    reps: '45 sec',
    rest: '60 sec',
    target: 'Full body',
    muscles: ['Core', 'Shoulders', 'Quads'],
    difficulty: 'Intermediate',
    equipment: 'Bodyweight',
    photo: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&h=600&fit=crop&auto=format',
    video: SAMPLE_VIDEO,
    duration: '0:50',
    instructions: 'Knees hovering an inch off the floor, crawl forward moving opposite hand and foot. Keep the hips low and level.',
    mistakes: ['Hips bouncing up', 'Same-side limbs moving', 'Rushing'],
    coachNote: 'Keep a book on your back — it should not fall. Slow and controlled.',
    coach: 'Rodrigo',
  },
]

/* ---------------- Coach ---------------- */
export const coach = {
  name: 'Rodrigo Salles',
  role: 'Performance Coach',
  avatar: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=200&h=200&fit=crop&auto=format',
  message:
    "Your consistency this week is strong. We'll reduce shoulder loading and add lower-body power. Log your meals after training.",
  when: '2h ago',
}

/* ---------------- 90 Day Challenge ---------------- */
export const challenge90 = {
  day: 34,
  total: 90,
  metrics: [
    { key: 'Training', value: '91%', sub: 'completion' },
    { key: 'Nutrition', value: '84%', sub: 'consistency' },
    { key: 'Mobility', value: '+12%', sub: 'range' },
    { key: 'Strength', value: '+18%', sub: 'output' },
    { key: 'Body weight', value: '-4.2 kg', sub: 'since day 1' },
    { key: 'Core score', value: '62 → 78', sub: '' },
  ],
  phases: [
    { n: 1, name: 'Foundation', range: 'Days 1–15' },
    { n: 2, name: 'Adaptation', range: 'Days 16–30' },
    { n: 3, name: 'Build', range: 'Days 31–50' },
    { n: 4, name: 'Performance', range: 'Days 51–70' },
    { n: 5, name: 'Evolution', range: 'Days 71–90' },
  ],
  checkpoints: [
    { day: 1, name: 'Initial Assessment', done: true },
    { day: 15, name: 'Foundation Check', done: true },
    { day: 30, name: 'Performance Review', done: true },
    { day: 45, name: 'Midpoint Assessment', done: false },
    { day: 60, name: 'Progress Review', done: false },
    { day: 75, name: 'Final Preparation', done: false },
    { day: 90, name: 'Final Assessment', done: false },
  ],
  photos: [
    { label: 'Day 1', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=560&fit=crop&auto=format&sat=-100' },
    { label: 'Day 30', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=560&fit=crop&auto=format&sat=-100' },
  ],
}

/* ---------------- Gamification / Rewards ---------------- */
export const coreXp = 8420
export const xpActions = [
  { action: 'Workout complete', xp: '+320' },
  { action: 'Meal logged', xp: '+20' },
  { action: 'Water goal', xp: '+40' },
  { action: 'Mobility session', xp: '+120' },
  { action: 'Perfect training week', xp: '+500' },
  { action: 'Personal best', xp: '+250' },
]
export const levels = [
  { n: 1, name: 'Foundation' },
  { n: 2, name: 'Control' },
  { n: 3, name: 'Build' },
  { n: 4, name: 'Performance' },
  { n: 5, name: 'Mastery' },
]
export const rewards = [
  { xp: 10000, name: 'Performance Session', desc: 'Unlock one exclusive performance workout.', locked: true },
  { xp: 12500, name: 'Avatar Frame — Gold', desc: 'Elemental gold profile frame.', locked: true },
  { xp: 15000, name: 'Coach Review', desc: 'Unlock a 1:1 performance review.', locked: true },
  { xp: 5000, name: 'Recovery Guide', desc: 'Mobility & recovery content pack.', locked: false },
]

/* ---------------- Meal / food journal ---------------- */
export type Meal = {
  id: number
  meal: string
  name: string
  time: string
  kcal: number
  protein: number
  carbs: number
  fat: number
  photo?: string
  note?: string
}
export const mealLog: Meal[] = [
  {
    id: 1,
    meal: 'Breakfast',
    name: 'Oats, whey & berries',
    time: '08:15',
    kcal: 480,
    protein: 34,
    carbs: 62,
    fat: 10,
    photo: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop&auto=format',
  },
  {
    id: 2,
    meal: 'Lunch',
    name: 'Chicken, rice, beans & salad',
    time: '12:42',
    kcal: 720,
    protein: 52,
    carbs: 78,
    fat: 18,
    photo: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&auto=format',
    note: 'Chicken, rice, beans, salad and vegetables.',
  },
  {
    id: 3,
    meal: 'Snack',
    name: 'Greek yogurt & almonds',
    time: '16:20',
    kcal: 320,
    protein: 22,
    carbs: 24,
    fat: 14,
    photo: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop&auto=format',
  },
]
export const nutritionConsistency = 82

export const programs = [
  { id: 'foundation', name: 'FOUNDATION', tag: 'Build the base.', progress: 58, sessions: '7 / 12 sessions', locked: false },
  { id: 'power', name: 'POWER DEVELOPMENT', tag: 'Complete Foundation II', progress: 0, sessions: 'Locked', locked: true },
  { id: 'core', name: 'CORE CONTROL', tag: 'Master midline stability.', progress: 34, sessions: '4 / 12 sessions', locked: false },
]

export const trainingFilters = ['Today', 'Programs', 'Strength', 'Core', 'Conditioning', 'Recovery']

export const bodyAreas = ['Shoulders', 'Spine', 'Hips', 'Knees', 'Ankles', 'Full Body']

export const personalBests = [
  { name: 'Push-Ups', value: '42 reps' },
  { name: 'Single-Leg Balance', value: '1m 28s' },
  { name: 'Hollow Hold', value: '1m 02s' },
]

export const coreTrend = [64, 67, 66, 70, 72, 71, 74, 76, 75, 78]

export const challengeHero = {
  name: '30 DAY CORE CONTROL',
  progress: 18,
  total: 30,
  reward: '+2,000 XP',
  img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop&auto=format',
}

export const challenges = [
  { cat: 'ACTIVE', name: 'POWER WEEK', desc: 'Complete 3 power sessions.', progress: 66, reward: '+400 XP' },
  { cat: 'WEEKLY', name: 'MOBILITY MASTER', desc: 'Complete 5 mobility sessions.', progress: 40, reward: '+500 XP' },
  { cat: 'WEEKLY', name: 'PERFECT WEEK', desc: 'Train every scheduled day.', progress: 60, reward: '+600 XP' },
  { cat: 'COMMUNITY', name: 'CONTROL LADDER', desc: 'Beat 60s of dead-bug control.', progress: 25, reward: '+300 XP' },
]

export const achievements = [
  { name: 'FIRST STEP', desc: 'Complete your first session.', earned: true },
  { name: 'CONSISTENCY', desc: '7-day streak.', earned: true },
  { name: 'CORE BUILDER', desc: 'Complete 20 core sessions.', earned: true },
  { name: 'BALANCED', desc: 'Reach 75+ in all metrics.', earned: false },
]

export const notifications = [
  { title: 'Training Reminder', body: 'Your Upper Body Power session is ready.', tone: 'gold', time: 'Now' },
  { title: 'Checkpoint Available', body: "You've unlocked the Foundation II assessment.", tone: 'success', time: '2h' },
  { title: 'Streak', body: 'One more session to reach a 14-day streak.', tone: 'default', time: '1d' },
]

/* ---------------- Wellness ---------------- */
export const feelings = [
  { id: 'drained', label: 'Drained', color: 'var(--color-danger)' },
  { id: 'low', label: 'Low', color: 'var(--color-warning)' },
  { id: 'good', label: 'Good', color: 'var(--color-water)' },
  { id: 'strong', label: 'Strong', color: 'var(--color-earth)' },
  { id: 'peak', label: 'Peak', color: 'var(--color-gold-hi)' },
]

export const waterGoalMl = 3000
export const calorieGoal = 2450
export const macros = [
  { key: 'Protein', value: 132, goal: 180, color: 'var(--color-fire)' },
  { key: 'Carbs', value: 186, goal: 260, color: 'var(--color-water)' },
  { key: 'Fat', value: 52, goal: 75, color: 'var(--color-earth)' },
]

/* ---------------- Coach diet plan (targets, read-only from coach) ---------------- */
export const coachPlan = {
  phase: 'Cut phase',
  updated: '3 days ago',
  meals: [
    { meal: 'Breakfast', time: '08:00', name: 'Oats, whey & fruit', kcal: 480 },
    { meal: 'Snack', time: '10:30', name: 'Fruit & almonds', kcal: 220 },
    { meal: 'Lunch', time: '13:00', name: 'Lean protein, rice & greens', kcal: 720 },
    { meal: 'Pre-workout', time: '16:30', name: 'Banana & coffee', kcal: 180 },
    { meal: 'Dinner', time: '20:00', name: 'Fish, sweet potato & salad', kcal: 620 },
  ],
}

/* ---------------- Health Profile / Anamnesis ---------------- */
export const anamnesisSections = [
  { id: 'personal', name: 'Personal Data', desc: 'Age, height, weight, contact', done: true },
  { id: 'goals', name: 'Goals', desc: 'What you want to achieve', done: true },
  { id: 'history', name: 'Training History', desc: 'Experience & activity level', done: true },
  { id: 'injuries', name: 'Injuries & Limitations', desc: 'Areas to protect', done: true },
  { id: 'health', name: 'Health History', desc: 'Conditions & family history', done: false },
  { id: 'meds', name: 'Medications', desc: 'What you currently take', done: false },
  { id: 'substances', name: 'Performance Substances', desc: 'Anabolics, GLP-1, others', done: false },
  { id: 'consent', name: 'Consent & Responsibility', desc: 'Terms & data sharing', done: false },
]

export const healthProfile = {
  personal: { age: 29, height: '178 cm', weight: '82 kg', blood: 'O+', sex: 'Male' },
  activityLevels: ['Sedentary', 'Light', 'Moderate', 'Active', 'Athlete'],
  experienceLevels: ['Beginner', 'Intermediate', 'Advanced'],
  injuries: [
    { area: 'Right shoulder', note: 'Impingement — avoid overhead pressing.', active: true },
    { area: 'Lower back', note: 'Occasional stiffness after sitting.', active: false },
  ],
  conditions: ['Hypertension', 'Diabetes', 'Asthma', 'Heart condition', 'Thyroid', 'None'],
  medications: [
    { name: 'Vitamin D', dose: '2000 IU · daily', note: 'Supplement' },
  ],
  substanceGroups: [
    { id: 'anabolic', label: 'Anabolic / androgenic steroids', hint: 'Testosterone, etc.' },
    { id: 'glp1', label: 'Weight-management meds', hint: 'GLP-1 (semaglutide, etc.)' },
    { id: 'stimulant', label: 'Stimulants / fat burners', hint: 'Clen, ephedrine, etc.' },
    { id: 'peptide', label: 'Peptides / hormones', hint: 'GH, insulin, etc.' },
  ],
}

export const profileMenu = [
  'Health Profile',
  'Core XP & Rewards',
  'Training Profile',
  'Goals',
  'Assessment History',
  'Notifications',
  'Connected Devices',
  'Subscription',
  'Settings',
  'Help',
  'Privacy',
  'Sign Out',
]
