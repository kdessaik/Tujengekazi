const mysql=require('mysql')
const express=require('express')
const cors=require('cors')

const app=express()
app.use(cors())

const db=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:''
    }
)

app.get('user',(re,res)=>{
    const mysqlquery="SELECT * FROM usertable"
    db
})

app.get('/',(re,res)=>{
    return res.json('Dessai Kibeho')
})

app.listen(8855,(re,res)=>{
    return console.log('responded')

})