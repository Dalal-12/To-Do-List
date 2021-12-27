const {Schema , model} =require('mongoose')

const userSchema=new Schema({
    
    password: {type:String , required:true} ,
    email:{type:String , required:true ,unique:true},
    username: String    
})

const User=model('Users',userSchema)
module.exports=User