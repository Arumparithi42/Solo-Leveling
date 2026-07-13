import {useState} from 'react';
import Todo from "./Todo";
function TodoList(){
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [todolist,setTodoList] = useState([]);
    let count = 0;
    function add(){
        setTodoList([...todolist,{id : count++, title : title, description : description}]);
    }
    return(
        <>
        {todolist.map(todo=>{return <Todo title = {title} description = {description}></Todo>})}
        Title: <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
        Description : <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
        <button onClick={add}>Add</button>
        </>
    )
}
export default TodoList;