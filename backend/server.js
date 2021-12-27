const { application } = require('express')
const express=require('express')
const server=express()
const db=require('./db')
const Todo=require('./models/todo')
const cors=require('cors')
const User=require('./models/user')


server.use(express.json())
server.use(cors())
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

server.delete("/tasks/:id",(req,res)=>{
    Todo.deleteOne({_id:req.params.id},(err,deleteObj)=>{
        if(err){console.log("ERROR: ",err)
    }
        else{
            
            deleteObj.deletedCount===1
             ? res.json("Deleted todo successfully")
            : res.status(404).json("This todo is not found")
        }
    })
})

server.put("/tasks/:id",(req,res)=>{
    Todo.updateOne({_id:req.params.id},{title:req.body.newTitle},(err,updateObj)=>{
        if(err){console.log("ERROR: ",err)
        res.status(400).json(err)
    }else{
        console.log(updateObj)
        updateObj.modifiedCount===1
        ? res.json("Update one todo successfully")
        : res.status(404).json("This todo is not found")
    }
    })
})

server.get("/filter",(req,res)=>{
    console.log(req.query)
    Todo.find({isCompleted:req.query.isCompleted},(err,data)=>{
        if(err){console.log("ERROR: ",err)
    }else{
      res.json(data)
    }
    })
})

server.delete("/tasks",(req,res)=>{
    Todo.deleteMany({isCompleted:true},(err,deleteObj)=>{
        if(err){console.log("ERROR: ",err)
    }
        else{
            console.log(deleteObj)
            deleteObj.deletedCount===0
            ?res.status(404).json("There is no completed todo  found")
            : res.json("Deleted all completed todo successfully")
            
        }
    })
})


server.put("/tasks/:id/:isCompleted",(req,res)=>{
    console.log("124:",req.params)
    Todo.updateOne({_id:req.params.id},{isCompleted:req.params.isCompleted},
        (err,updateObj)=>{
        if(err){console.log("ERROR: ",err)
        res.status(400).json(err)
    }else{
        console.log(updateObj)
        updateObj.modifiedCount===1
        ? res.json("Update one todo successfully")
        : res.status(404).json("This todo is not found")
    }
    })
})

server.post("/users/register",(req,res)=>{
    User.create(req.body,(err,newUser)=>{
    if(err){console.log("ERROR: ",err)}
    else{res.status(201).json("created new user successfully")}
    })
    })

    server.post("/users/login",(req,res)=>{
        User.find({email:req.body.email},(err,data)=>{
        if(err){console.log("ERROR: ",err)}
        else{
            console.log(data)
            if(data.length===1){if(req.body.password===data[0].password)
            {
                res.status(200).json({message:"login successful",
                username:data[0].username})} else{
                    res.status(400).json("Wrong Password")}
            }
            else{res.status(404).json("The email is not registered")}
            }
           
        })
        })

server.listen(5000,()=>{console.log("Server is On...")})