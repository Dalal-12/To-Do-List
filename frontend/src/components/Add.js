import React,{useState} from "react";
export default function Add(props){
    const [newTitle,setNewTitle]=useState("")
    const createNewTodo=()=>{
        console.log("create new todo")
        props.createFunc({title:newTitle,isCompleted:false})
    }
    return( <div className="Add"> 
    <input type="text" placeholder="write new task here ..." 
    onChange={(e)=>{setNewTitle(e.target.value)}} />
    <button onClick={createNewTodo}> Create New Todo </button>
    
    
    </div>

    )

}