import TodoTemplate from "./TodoTemplate";
function BonusDailyQuest(){
    return(
        <div className = "bonusDailyQuest">
            <p>BONUS DAILY QUEST</p>
        <TodoTemplate msg = "DBMS Revision"> </TodoTemplate>
        <TodoTemplate msg = "Speech"> </TodoTemplate>
        <TodoTemplate msg = "Reading"> </TodoTemplate>
        </div>
    )
}
export default BonusDailyQuest;