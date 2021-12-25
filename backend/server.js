const express=require('express')
const server=express()
const db=require('./db')
const Todo=require('./models/todo')
console.log(Todo)



server.get("/",(req,res)=>{
res.json('GET  is working')
})

server.get("/tasks",(req,res)=>{
    res.json('GET  is working')
    })

server.post("/",(req,res)=>{
    console.log("Create New Todo Successfully")
})

server.listen(5000,()=>{console.log("Server is On...")})