import { useState } from "react";

import DailyQuest from "./DailyQuest";
import BonusDailyQuest from "./BonusDailyQuest";
import WeeklyQuest from "./WeeklyQuest";
function Home(){
    const [progress, setProgress] = useState(0);
    return(
    <div className = "questContainer">
        <DailyQuest progress = {progress} setProgress = {setProgress} ></DailyQuest>
        { progress == 100 && <BonusDailyQuest></BonusDailyQuest>}
        <WeeklyQuest></WeeklyQuest>
    </div>
    );
}
export default Home;