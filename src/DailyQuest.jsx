
import TodoTemplate from "./TodoTemplate";
function DailyQuest(){
    let msgs = [{msg : "Leet Code", id : 1, done : false},
                {msg : "DSA Revision", id : 2, done : false},
                {msg : "GitHub commit", id : 3, done : false},
                {msg : "TryHackMe", id : 4, done : false}];
    function handleDone(id){
        let msg = msgs.filter((msg) => msg.id == id)
        msg[0].done = true;
    }
    return(
        <div className = "dailyQuest">
            <h2>DAILY QUEST</h2>
        {msgs.map((msg) => <TodoTemplate key = {msg.id} id = {msg.id} msg = {msg.msg} onDone = {handleDone} ></TodoTemplate>)}
        </div>
    )
}
export default DailyQuest;