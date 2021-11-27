import { useState } from "react";
import style from "./Toggle.module.css";

function TodoInput({onTaskCreate}){

    const [text,setText]= useState("");

    const handleChange = (e)=>{
        setText(e.target.value)
    }
    
    const handleClick = ()=>{
        onTaskCreate(text)
    }
    return (
        <div className={style.todoItem}>
            <input type="text"
             placeholder="Write Something"
             value={text}
             onChange={handleChange}
             />
             <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoInput;