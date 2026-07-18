import {useState} from 'react';
function Todo(props){
    const [doneOrCompleteBtn, setDCBtn] = useState("Done?");
    const[editOrRemoveBtn, setERBtn] = useState("Edit");
    const [DCcolor, setDCColor] = useState("red");
    const [ERcolor, setERColor] = useState("red");
    
    function done(){
        setDCBtn("Completed");
        setDCColor("lightGreen");
        setERBtn("Remove");
    }
    
    return(
        <div className = "todo">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <button style = {{backgroundColor : DCcolor}} onClick={done}>{doneOrCompleteBtn}</button>
        <button style = {{backgroundColor : ERcolor}} onClick={()=>{
            if (editOrRemoveBtn === "Remove") props.remove(props.id);
            else props.edit(props.id);
        }}>
            {editOrRemoveBtn}
        </button>
        </div>
    )
}
export default Todo;