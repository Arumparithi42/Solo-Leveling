import TodoTemplate from "./TodoTemplate";
function DailyQuest(){
    return(
        <div className = "weeklyQuest">
            <h2>WEEKLY QUEST</h2>
        <TodoTemplate msg = "Article Writing"> </TodoTemplate>
        <TodoTemplate msg = "LinkedIn Post"> </TodoTemplate>
        </div>
    )
}
export default DailyQuest;