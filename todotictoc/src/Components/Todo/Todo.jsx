import { useState } from "react";
import style from "./Toggle.module.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todo(){

    const [todos,setTodos]=useState([])
    
    const  handleTaskCreate = (title)=>{
        const payload={
            id: todos.length+1,
            title: title,
            status: "false"
        }
        setTodos([...todos,payload]);
    }

    // delete
    const handleDelete = (id)=>{
        setTodos(todos.filter((item)=>item.id !==id));
    }

    // * toggle
    const handleToggle=(id)=>{
        const updatedTodos = todos.map((item)=>
        item.id===id ? {...item, status: (item.status==="true")?("false"):"true"}: item
        );
        setTodos(updatedTodos);
    }
    
    return (
        <div className={style.todo}>
            <h1>TODO LIST</h1>
            <TodoInput onTaskCreate={handleTaskCreate}/>
            {
                 todos.map((todo)=>{
                    return (
                <TodoList
                id={todo.id}
                title={todo.title} 
                status={todo.status}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                />
                );
                })
            }
        </div>
    )
}