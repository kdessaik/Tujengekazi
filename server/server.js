const mysql=require('mysql')
const cors=require('cors')
const express=require('express')

const app=express()
app.use(cors())

const db=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'formpython'

})


app.get('/',(re,res)=>{
    return res.json('Dessai')
})

app.get('/user',(re,res)=>{
    const query='SELECT * FROM usertable'
    db.query(query,(err,data)=>{
        if(err) return re.json(err)
            return res.json(data)


    })



})



app.listen(8021,()=>{
    console.log('Listening')
})