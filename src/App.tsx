import { Presentation } from './components/Presentation'
import { Slide1CoverNew } from './slides/Slide1CoverNew'
import { Slide2Introduction } from './slides/Slide2Introduction'
import { Slide3MethodSteps } from './slides/Slide3MethodSteps'
import { Slide4Step1Divide } from './slides/Slide4Step1Divide'
import { Slide5Step2WorkloadNew } from './slides/Slide5Step2WorkloadNew'
import { Slide6DailyRoutine } from './slides/Slide6DailyRoutine'
import { Slide7WeekendPractice } from './slides/Slide7WeekendPractice'
import { Slide8SafetyBuffer } from './slides/Slide8SafetyBuffer'
import { Slide9S1Modules } from './slides/Slide9S1Modules'
import { Slide10MasterTimeline } from './slides/Slide10MasterTimeline'
import { Slide11Timeline } from './slides/Slide11Timeline'
import { Slide12Agenda } from './slides/Slide12Agenda'
import { Slide13Modules } from './slides/Slide13Modules'
import { Slide14Conclusion } from './slides/Slide14Conclusion'

const slides = [
  Slide1CoverNew,
  Slide2Introduction,
  Slide3MethodSteps,
  Slide4Step1Divide,
  Slide5Step2WorkloadNew,
  Slide6DailyRoutine,
  Slide7WeekendPractice,
  Slide8SafetyBuffer,
  Slide9S1Modules,
  Slide10MasterTimeline,
  Slide11Timeline,
  Slide12Agenda,
  Slide13Modules,
  Slide14Conclusion,
]

export default function App() {
  return (
    <main className="w-full h-screen overflow-hidden bg-(--color-deep-navy)">
      <Presentation
        totalSlides={slides.length}
        demoSlides={slides}
      />
    </main>
  )
}
