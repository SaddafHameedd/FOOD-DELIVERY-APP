const express= require('express')
const app = express()
const mongoDB= require('./db')
mongoDB();
const port =5000;
app.get('/',(req,res)=>{
  res.send('Hello world')
})


app.listen(port,()=>{
  console.log('Example app listeing on port'+ port);
})


