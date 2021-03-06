import React from "react";
export default function Todo(props){
    const {_id,title,isCompleted}=props.tasks
    return(
        <div className="Todo">
            <input type="checkBox" defaultChecked={isCompleted} onClick={()=>{
                props.toggleTodo(_id,!isCompleted)
            } }/>
            <span style={{textDecoration:isCompleted ? 'line-through' : "none"}}>
                 {title} </span>
            <button onClick={()=>{props.deleteTodo(_id)}}> X </button>
        </div>
    )
}