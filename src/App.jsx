import { useState } from "react";

import "./App.css";
import DailyQuest from "./DailyQuest"
import BonusDailyQuest from "./BonusDailyQuest";
import WeeklyQuest from "./WeeklyQuest"
import Practice from "./Practices";
import TodoList from "./TodoList";
function App() {
  const [progress, setProgress] = useState(0);
  return (
   <>
   <DailyQuest progress = {progress} setProgress = {setProgress} ></DailyQuest>
   { progress == 100 && <BonusDailyQuest></BonusDailyQuest>}
   {/* <Practice></Practice> */}
    <WeeklyQuest></WeeklyQuest>
    <TodoList></TodoList>
   </>
  )
}

export default App
