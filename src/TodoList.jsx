import {useState} from 'react';
import { useRef } from 'react';
import Todo from "./Todo";
function TodoList(){
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [todolist,setTodoList] = useState([]);
    const count = useRef(0);
    function add(){
        setTodoList([...todolist,{id : count.current, title : title, description : description}]);
        count.current++;
        setTitle("");
        setDescription("");
    }
    function remove(id){
        let newTodoList = todolist.filter((todo) => todo.id != id);
        setTodoList(newTodoList);
    }
    return(
        <div className='todoListContainer'>
            <h2>ToDos</h2>
        {todolist.map(todo=>{return <Todo key = {todo.id} id = {todo.id} title = {todo.title} description = {todo.description} remove = {remove}></Todo>})}
        Title: <input type="text" value = {title} onChange={(e)=>setTitle(e.target.value)}/>
        Description : <input type="text" value = {description} onChange={(e)=>setDescription(e.target.value)}/>
        <button onClick={add}>Add</button>
        </div>
    )
}
export default TodoList;