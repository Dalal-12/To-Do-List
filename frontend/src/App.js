import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Todo from './components/Todo';
import Add from './components/Add'

export default function App() {
  const [tasks,setTasks]=useState([])

  useEffect(()=>{getData()},[])
  const getData=()=>{
  axios
  .get('http://localhost:5000/tasks')
  .then((response)=>{console.log("DATA: ",response.data)
  setTasks(response.data)
  })
  .catch((err)=>{console.log("ERROR: ",err)})
}

const postNewTodo=(body)=>{
  axios
  .post('http://localhost:5000/tasks',body)
  .then((response)=>{console.log("DATA: ",response.data)
   getData()
})
.catch((err)=>{console.log("ERROR: ",err)})
}

const deleteTodo=(id)=>{
  axios
  .delete(`http://localhost:5000/tasks/${id}`)
  .then((response)=>{console.log("DATA: ",response.data)
   getData()
})
.catch((err)=>{console.log("ERROR: ",err)})
}


const toggleTodo=(id,newStatus)=>{
  axios
  .put(`http://localhost:5000/tasks/${id}/${newStatus}`)
  .then((response)=>{console.log("DATA: ",response.data)
   getData()
})
  .catch((err)=>{console.log("ERROR: ",err)})
}

const deleteTask=()=>{
  axios
  .delete("http://localhost:5000/tasks")
  .then((response)=>{console.log("DATA: ",response.data)
   getData()
})
.catch((err)=>{console.log("ERROR: ",err)})
}

const filterData=(status)=>{
  axios
  .get(`http://localhost:5000/filter?isCompleted=${status}`)
  .then((response)=>{console.log("DATA: ",response.data)
  setTasks(response.data)
  })
  .catch((err)=>{console.log("ERROR: ",err)})
}

const mapOverTasks=tasks.map((tasksObj,i)=>{
  return <Todo key={tasksObj._id} tasks={tasksObj} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
})
  return (
    <div className="App">
      <p> App </p>
      <Add createFunc={postNewTodo} />
      <button onClick={getData}> Get Tasks </button>
      <button onClick={deleteTask}>Delete Completed Tasks </button>
      <button onClick={()=>{filterData(true)}}> Get All Done Tasks </button>
      <button onClick={()=>{filterData(false)}}> Get Pending Tasks </button>
      {mapOverTasks}
   </div>
  );
}


