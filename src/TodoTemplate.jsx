import {useState} from 'react';
function TodoTemplate(props){
    const [btn, setBtn] = useState("Done?");
    const [color, setColor] = useState("whilte");
    function done(){
        setBtn("Completed ✅");
        console.log("Pressed");
        setColor("lightGreen");
        props.onDone(props.id);
    }
    return(
        <div className = "todoTemplate">
        <p>{props.msg}</p>
        <button style = {{backgroundColor : color}} onClick={done}>{btn}</button>
        </div>
    )
}
export default TodoTemplate;