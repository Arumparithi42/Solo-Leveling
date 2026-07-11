import { useState } from "react";
import { useEffect } from "react";
import TodoTemplate from "./TodoTemplate";
function BonusDailyQuest(){
    useEffect(()=>
        alert("You have Unlocked 'Bonus Daily Quest' by completing Daily Quest"),[]
    )

    const [taskCompleted, setTaskCompleted] = useState(0);
    const [progress, setProgress] = useState();
    let msgs = [{msg : "DBMS Revision", id : 1, done : false},
                {msg : "Speec", id : 2, done : false},
                {msg : "Reading", id : 3, done : false},
                {msg : "Type Writing", id : 4, done : false}];

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
        <div className = "bonusDailyQuest">
            <h2>BONUS DAILY QUEST</h2>
        {msgs.map((msg) => <TodoTemplate key = {msg.id} id = {msg.id} msg = {msg.msg} onDone = {handleDone} ></TodoTemplate>)}
        <p className="progress">Progress : {progress}%</p>
        </div>
    )
}
export default BonusDailyQuest;