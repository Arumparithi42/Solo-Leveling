import TodoTemplate from "./TodoTemplate";
function DailyQuest(){
    return(
        <div className = "dailyQuest">
            <p>DAILY QUEST</p>
        <TodoTemplate msg = "Leet Code"> </TodoTemplate>
        <TodoTemplate msg = "DSA Revision"> </TodoTemplate>
        <TodoTemplate msg = "GitHub commit"> </TodoTemplate>
        <TodoTemplate msg = "TryHackMe"> </TodoTemplate>
        </div>
    )
}
export default DailyQuest;