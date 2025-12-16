import React, { useState } from 'react'
        
const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState("");
    const [editing, setEditing] = useState(null);
    const handleAddorUpdate = (e) => {
        e.preventDefault();
     if(editing!==null){
            const updateTodo=[...todo];
            updateTodo[editing].task=task;
            setTodo(updateTodo);
            setEditing(null)
        }
        else{
        setTodo([...todo, { task: task, completed:false }])
        }
        setTask("")
    };
    const handleEdit = (index) => { 
        setTask(todo[index].task)
        setEditing(index)
    };
    const handleDelete = (index) => {
        const updateTodo = todo.filter((todos,i)=>i!==index);
        setTodo(updateTodo)
     };
    const handleToggleComplete =(index) => { 
    const updateTodo=[...todo];
    updateTodo[index].completed=!updateTodo[index].completed
    setTodo(updateTodo)
    };
    return (
        <div>
            <h1>Todo</h1>
            <label>Task : </label>
            <input type="text" placeholder='Enter the Task' value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleAddorUpdate}>{editing === null ? "Add" : "Update"}</button>
            <ul>
                {todo.map((todos,index) => (
                    <li key={index}>
                        <span 
                        style={{textDecoration:todos.completed? "line-through":"none",cursor:"pointer"}} 
                        onClick={()=>handleToggleComplete(index)}>{todos.task}</span>
                        <button onClick={()=> handleEdit(index)}>Edit</button>
                        <button onClick={()=> handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    
    )
}

export default Todo