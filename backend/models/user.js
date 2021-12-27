const {Schema , model} =require('mongoose')

const userSchema=new Schema({
    username: String    ,
    password: {type:String , required:true} ,
    email:{type:String , required:true ,unique:true}
})

const User=model('Users',userSchema)
module.exports=User