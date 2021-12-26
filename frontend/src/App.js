import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Todo from './components/Todo';

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

const mapOverTasks=tasks.map((tasksObj,i)=>{
  return <Todo key={i} tasks={tasksObj} />
})
  return (
    <div className="App">
      <p> App </p>
      <button onClick={getData}> Get Tasks
      </button> 
      {mapOverTasks}
   </div>
  );
}

