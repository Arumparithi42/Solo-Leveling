import {useState} from 'react';
function Todo(props){
    const [doneOrCompleteBtn, setDCBtn] = useState("Done?");
    const[editOrRemoveBtn, setERBtn] = useState("Edit");
    const [color, setColor] = useState("whilte");
    
    function done(){
        setDCBtn("Completed ✅");
        setColor("lightGreen");
        setERBtn("Remove");
    }
    
    
    return(
        <div className = "todo">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <button style = {{backgroundColor : color}} onClick={done}>{doneOrCompleteBtn}</button>
        <button style = {{backgroundColor : color}} onClick={()=>props.remove(props.id)}>{editOrRemoveBtn}</button>
        </div>
    )
}
export default Todo;