import React from "react";
export default function Todo(props){
    const {_id,title,isCompleted}=props.tasks
    return(
        <div className="Todo">
         <p> Title : {title}</p>
        </div>
    )
}