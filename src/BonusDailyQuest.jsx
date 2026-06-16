import TodoTemplate from "./TodoTemplate";
function BonusDailyQuest(){
    return(
        <div className = "bonusDailyQuest">
            <h2>BONUS DAILY QUEST</h2>
        <TodoTemplate msg = "DBMS Revision"> </TodoTemplate>
        <TodoTemplate msg = "Speech"> </TodoTemplate>
        <TodoTemplate msg = "Reading"> </TodoTemplate>
        <TodoTemplate msg = "Type Writing"> </TodoTemplate>
        </div>
    )
}
export default BonusDailyQuest;