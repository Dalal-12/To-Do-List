import axios from 'axios'
import React,{useState} from 'react'
import {Routes,Route,Link} from 'react-router-dom'


export default function Login(props){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const loginFunc=(e)=>{
        e.preventDefault()
        const userInfo={email,password}
        axios
        .post('http://localhost:5000/users/login',userInfo)
        .then((response)=>{console.log("DATA: ",response.data)
        props.setIsLoggedIn(true)
        props.setUsername(response.data.username)
    })
       .catch((err)=>{console.log("ERROR: ",err)})
     }
    
    return(
        <div>
            <form action="">
                <label htmlFor="email"> Email: </label>
                <input type="email"  placeholder="write your email here" 
                onChange={(e)=>{setEmail(e.target.value)}}  value={email} />
                <br/>
                <label htmlFor="password"> Password: </label>
                <input type="password" placeholder="write your password here"
                 onChange={(e)=>{setPassword(e.target.value)}} value={password}  />
                <br/>
              
                <input type="submit"  value="Login" onClick={loginFunc}  />
                <Link to='/register'>Don't Have an Account?</Link>
            </form>
        </div>
    )
}