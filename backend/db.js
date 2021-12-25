const mongoose=require('mongoose')
const mongooseURI='mongodb://localhost:27017/ToDoListV01'
const db=mongoose.connection
mongoose.connect(mongooseURI,()=>{console.log("The connection is established")})