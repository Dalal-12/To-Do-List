import axios from 'axios'
import React,{useState} from 'react'
import {Routes,Route,Link} from 'react-router-dom'

export default function Register(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')

    const registerFunc=(e)=>{
        e.preventDefault()
        const newUser={email,password,username}
        axios
        .post('http://localhost:5000/users/register',newUser)
        .then((response)=>{console.log("DATA: ",response.data)})
       .catch((err)=>{console.log("ERROR: ",err)})
     }
    
    return(
        <div className="Register">
            <form action="">
                <label htmlFor="email"> Email: </label>
                <input type="email"  placeholder="write your email here" 
                onChange={(e)=>{setEmail(e.target.value)}}  value={email} />
                <br/>
                <label htmlFor="password"> Password: </label>
                <input type="password" placeholder="write your password here"
                 onChange={(e)=>{setPassword(e.target.value)}} value={password}  />
                <br/>
                <label htmlFor="username"> Username: </label>
                <input type="text" placeholder="write your username here"  
                 onChange={(e)=>{setUsername(e.target.value)}} value={username} />
                <br/>
                <input type="submit"  value="Register" onClick={registerFunc} class="btn btn-primary" />
                <Link to='/login'>Have an Account?</Link>

            </form>
        </div>
    )

}
    
