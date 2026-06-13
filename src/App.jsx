import "./App.css";
import DailyQuest from "./DailyQuest"
import BonusDailyQuest from "./BonusDailyQuest";
import WeeklyQuest from "./WeeklyQuest"
import Practice from "./Practices";
function App() {

  return (
   <>
   <DailyQuest></DailyQuest>
   <BonusDailyQuest></BonusDailyQuest>
   {/* <Practice></Practice> */}
    <WeeklyQuest></WeeklyQuest>
   </>
  )
}

export default App
