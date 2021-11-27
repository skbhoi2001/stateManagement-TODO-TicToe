import style from "./Toggle.module.css";
const TodoList = ({id,status,title,handleDelete,handleToggle})=>{
    if(status==="true")
    {
        var Style = {
            textDecoration:"line-through"          
        }
    }

    return <div className={style.list}>
        <span className={style.id}>{id}.</span>
        <span onClick={()=>handleToggle(id)} style={Style} className={style.status}>{title}</span>
        <button onClick={()=>handleDelete(id)} className={style.delete}>Delete</button>
    </div>
 }
 
 export default TodoList