import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [editing, setEditing] = useState(null);
  const API ="http://localhost:3000"
  const fetchTodo = async()=>{
    const res = await axios.get(`${API}`)
    setTodo(res.data);
  }
  useEffect(()=>{
    fetchTodo();
  },[])
  const handleAddorUpdate = async(e) => {
    if(task.trim()==="")return
    e.preventDefault();
    if(editing!==null){
      await axios.put(`${API}/update/${editing}`,{task:task})
      setEditing(null);
    }
    else{
      await axios.post(`${API}/create`,{task:task})
    }
    setTask("")
    fetchTodo();
  };
  const handleEdit = (todos) => {
    setTask(todos.task)
    setEditing(todos._id)
  };
  const handleDelete = async(id) => {
    await axios.delete(`${API}/delete/${id}`)
    fetchTodo()
  };
  const handleToggleComplete = async(todos) => {
    await axios.put(`${API}/update/${todos._id}`,{completed:!todos.completed})
    fetchTodo()
  };
  return (
    <div>
      <h1>Todo</h1>
      <label>Task : </label>
      <input
        type="text"
        placeholder="Enter the Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddorUpdate}>
        {editing === null ? "Add" : "Update"}
      </button>
      <ul>
        {todo.map((todos) => (
          <li key={todos._id}>
            <span
              style={{
                textDecoration: todos.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => handleToggleComplete(todos)}
            >
              {todos.task}
            </span>
            <button onClick={() => handleEdit(todos)}>Edit</button>
            <button onClick={() => handleDelete(todos._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;