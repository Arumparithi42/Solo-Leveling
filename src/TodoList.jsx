import {useState} from 'react';
import { useRef } from 'react';
import Todo from "./Todo";
function TodoList(){
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [editId, setEditId] = useState(null);

    const [todoList,setTodoList] = useState([]);
    const count = useRef(1);
    function add(){
        if (title.trim() === "") return;
        if (!editId){
            setTodoList([...todoList,{id : count.current, title, description}]);
            count.current++;
        }
        else{
            const updatedTodoList = todoList.map(todo => 
                (todo.id === editId) ? {...todo,title, description} : todo);
            setTodoList(updatedTodoList);
            setEditId(null);
        }
        setTitle("");
        setDescription("");
    }
    function edit(id){
        let todo = todoList.find((todo)=> todo.id == id);
        setTitle(todo.title);
        setDescription(todo.description);
        setEditId(id);
    }
    function remove(id){
        let newTodoList = todoList.filter((todo) => todo.id != id);
        setTodoList(newTodoList);
    }
    return(
        <div className='todoListContainer'>
            <h2>ToDos</h2>
        {todoList.map(todo=>{return <Todo key = {todo.id} id = {todo.id} title = {todo.title} description = {todo.description} edit = {edit} remove = {remove}></Todo>})}
        <label htmlFor="todoTitle">Title</label>
        <input id = "todoTitle" type="text" value = {title} onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor="todoDescription">Description</label>
        <input id = "todoDescription" type="text" value = {description} onChange={(e)=>setDescription(e.target.value)}/>
        <button onClick={add}>{!editId ? "Add" : "Update"}</button>
        </div>
    )
}
export default TodoList;