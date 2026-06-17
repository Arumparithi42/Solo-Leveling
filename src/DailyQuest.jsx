import { useState } from "react";
import { useEffect } from "react";
import TodoTemplate from "./TodoTemplate";
function DailyQuest(){

    const [taskCompleted, setTaskCompleted] = useState(0);
    const [progress, setProgress] = useState(0);

    let msgs = [{msg : "Leet Code", id : 1, done : false},
                {msg : "DSA Revision", id : 2, done : false},
                {msg : "GitHub commit", id : 3, done : false},
                {msg : "TryHackMe", id : 4, done : false}];

    let taskLength = msgs.length;
    function handleDone(id){
        let msg = msgs.filter((msg) => msg.id == id)
        msg[0].done = true;
        setTaskCompleted(taskCompleted + 1);
    }
    useEffect(()=>{
        setProgress(taskCompleted/taskLength*100);
    },[taskCompleted])
    
    
    return(
        <div className = "dailyQuest">
            <h2>DAILY QUEST</h2>
        {msgs.map((msg) => <TodoTemplate key = {msg.id} id = {msg.id} msg = {msg.msg} onDone = {handleDone} ></TodoTemplate>)}
        <p className="progress">Progress : {progress}%</p>
        </div>
    )
}
export default DailyQuest;