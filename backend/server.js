const { application } = require('express')
const express=require('express')
const server=express()
const db=require('./db')
const Todo=require('./models/todo')
server.use(express.json())
console.log(Todo)



server.get("/",(req,res)=>{
res.json('GET  is working')
})

server.get("/tasks",(req,res)=>{
    Todo.find({},(err,data)=>{
        if(err){console.log("ERROR: ",err)}else{res.json(data)}
    })
    })


server.post("/tasks",(req,res)=>{
Todo.create(req.body,(err,newTask)=>{
if(err){console.log("ERROR: ",err)}
else{res.status(201).json(newTask)}
})
 
})

server.listen(5000,()=>{console.log("Server is On...")})