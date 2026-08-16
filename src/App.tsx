import { useState } from 'react'
import { BottomNav, type Tab } from './components/BottomNav'
import { Toaster } from './components/toast'
import {
  AssessmentScreen,
  BuildingPlan,
  CreateAccount,
  DisciplineScreen,
  GoalScreen,
  LanguageScreen,
  Splash,
  TrainingProfileScreen,
  Welcome,
} from './screens/Onboarding'
import { Home } from './screens/Home'
import { Mobility, Notifications, Profile, Progress, Training } from './screens/Tabs'
import { Wellness } from './screens/Wellness'
import { ExerciseDetail, WorkoutComplete, WorkoutDetail, WorkoutPlayer } from './screens/Workout'
import { Challenge90, HealthProfile, LevelUpModal, Rewards, Settings } from './screens/More'

type Route =
  | 'splash'
  | 'language'
  | 'welcome'
  | 'account'
  | 'goal'
  | 'discipline'
  | 'assessment'
  | 'trainingProfile'
  | 'building'
  | 'app'
  | 'mobility'
  | 'profile'
  | 'notifications'
  | 'workoutDetail'
  | 'exerciseDetail'
  | 'workoutPlayer'
  | 'workoutComplete'
  | 'rewards'
  | 'health'
  | 'settings'

export default function App() {
  const [route, setRoute] = useState<Route>('splash')
  const [tab, setTab] = useState<Tab>('home')
  const [exIndex, setExIndex] = useState(0)
  const [levelUp, setLevelUp] = useState(false)
  const go = (r: Route) => setRoute(r)

  const tabView = () => {
    switch (tab) {
      case 'home':
        return (
          <Home
            onStart={() => go('workoutDetail')}
            onProfile={() => go('profile')}
            onBell={() => go('notifications')}
          />
        )
      case 'training':
        return (
          <Training
            onSession={() => go('workoutDetail')}
            onMobility={() => go('mobility')}
            onProfile={() => go('profile')}
            onBell={() => go('notifications')}
          />
        )
      case 'wellness':
        return <Wellness onProfile={() => go('profile')} onBell={() => go('notifications')} />
      case 'progress':
        return <Progress onProfile={() => go('profile')} onBell={() => go('notifications')} />
      case 'challenges':
        return <Challenge90 onProfile={() => go('profile')} onBell={() => go('notifications')} />
    }
  }

  const screen = () => {
    switch (route) {
      case 'splash':
        return <Splash onDone={() => go('language')} />
      case 'language':
        return <LanguageScreen onNext={() => go('welcome')} />
      case 'welcome':
        return <Welcome onCreate={() => go('account')} onSignIn={() => go('app')} />
      case 'account':
        return <CreateAccount onNext={() => go('goal')} onBack={() => go('welcome')} />
      case 'goal':
        return <GoalScreen onNext={() => go('discipline')} onBack={() => go('account')} />
      case 'discipline':
        return <DisciplineScreen onNext={() => go('assessment')} onBack={() => go('goal')} />
      case 'assessment':
        return <AssessmentScreen onNext={() => go('trainingProfile')} onBack={() => go('discipline')} />
      case 'trainingProfile':
        return <TrainingProfileScreen onNext={() => go('building')} onBack={() => go('assessment')} />
      case 'building':
        return <BuildingPlan onDone={() => go('app')} />
      case 'mobility':
        return <Mobility onBack={() => go('app')} />
      case 'profile':
        return (
          <Profile
            onBack={() => go('app')}
            onRewards={() => go('rewards')}
            onHealth={() => go('health')}
            onSettings={() => go('settings')}
          />
        )
      case 'notifications':
        return <Notifications onBack={() => go('app')} />
      case 'rewards':
        return <Rewards onBack={() => go('profile')} />
      case 'health':
        return <HealthProfile onBack={() => go('profile')} />
      case 'settings':
        return <Settings onBack={() => go('profile')} />
      case 'workoutDetail':
        return (
          <WorkoutDetail
            onStart={() => go('workoutPlayer')}
            onBack={() => go('app')}
            onExercise={(i) => {
              setExIndex(i)
              go('exerciseDetail')
            }}
          />
        )
      case 'exerciseDetail':
        return <ExerciseDetail index={exIndex} onBack={() => go('workoutDetail')} onStart={() => go('workoutPlayer')} />
      case 'workoutPlayer':
        return <WorkoutPlayer onComplete={() => go('workoutComplete')} onBack={() => go('app')} />
      case 'workoutComplete':
        return (
          <WorkoutComplete
            onDone={() => {
              setTab('home')
              setLevelUp(true)
              go('app')
            }}
            onPerformance={() => {
              setTab('progress')
              go('app')
            }}
          />
        )
      case 'app':
        return (
          <>
            {tabView()}
            <BottomNav active={tab} onChange={setTab} />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black sm:py-6">
      <div className="relative w-full max-w-[420px] h-screen sm:h-[860px] sm:max-h-[92vh] overflow-hidden bg-bg sm:rounded-[32px] sm:border sm:border-border sm:shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
        {screen()}
        {levelUp && <LevelUpModal onClose={() => setLevelUp(false)} />}
        <Toaster />
      </div>
    </div>
  )
}
