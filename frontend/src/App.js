import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Todo from './components/Todo';
import Add from './components/Add'
import Register from './components/Register'
import Login from './components/Login';
import {Routes,Route,Link} from 'react-router-dom'

export default function App() {
  const [tasks,setTasks]=useState([])
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [username,setUsername]=useState("")
 

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

const logoutFunc=()=>{
  setIsLoggedIn(false)
  setUsername("")
}

const mapOverTasks=tasks.map((tasksObj,i)=>{
  return <Todo key={tasksObj._id} tasks={tasksObj} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
})
  return (
    <div className="App">
      <p> App </p>
      <p>{username}</p>
      <nav> 
        <Link to='/home'>Home</Link> {'   |   '}
        <Link to='/login'>Login</Link>{'   |   '}
        <Link to='/register'>Register</Link>
      </nav>
      <br/>

      <button onClick={logoutFunc}> Logout </button>
      <Routes>
        <Route  path="/home"   element={
          <div className="Home">
         
          <button onClick={getData}> Get Tasks </button>
          <button onClick={deleteTask}>Delete Completed Tasks </button>
          <button onClick={()=>{filterData(true)}}> Get All Done Tasks </button>
          <button onClick={()=>{filterData(false)}}> Get Pending Tasks </button>
    
          
          <Add createFunc={postNewTodo} />
          {mapOverTasks}
          </div>
        }  />

        <Route  path="/register"   element={<Register />}  />
        <Route  path="/login"   element={ <Login setIsLoggedIn={setIsLoggedIn}
         setUsername={ setUsername}/>}  />
      </Routes>


   </div>
  );
}


