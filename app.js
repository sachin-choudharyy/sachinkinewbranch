const express=require('express')
const mongoose=require('mongoose')
const url ='mongodb://localhost:27017/sachin'
const user=require('./routes/user')
const app=express()

mongoose.connect(url)
con = mongoose.connection


con.on('open',function()
{
    console.log("coonected to mongodb")
})

app.use(express.json())

app.use('/',user)
app.listen(5000,()=>{
    console.log("serverstart")
})