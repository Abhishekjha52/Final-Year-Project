
const express = require("express");
const app = express()
const cors = require("cors")
const bcrypt=require("bcrypt")
const saltRounds = 10
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const mysql = require('mysql')

app.listen(3002, ()=>{
    console.log("Server running at port 3002")
})


const db = mysql.createConnection({
    user: 'Abhishek',
    host: 'localhost',
    password: 'Abhishekjha@123',
    database: 'project1' 
})

/*
//acts as endpoint 
app.post('/addUser', (req, res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;

    //use to connect and communicate with backend server
    db.query("INSERT INTO users(firstName, lastName) VALUES (?, ?)", [firstName, lastName],(err, res)=>{
        if(err){
            console.log(err)
        }
    })
})

app.post('/getUsers',  (req, res)=>{
    
    db.query('SELECT * FROM users', (err, result)=>{
        if(err){
            console.log(err)
        }

        if(result){
            console.log(result);
            res.send(result);
        }
    })
})*/

app.post('/signUp', (req, res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email;
    const password=req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash)=>{
        db.query('INSERT INTO users(firstName, lastName, email, password) VALUES (?, ?, ?, ?)', [firstName, lastName, email, hash], (err, res)=>{
            if(err){
                console.log(err);
            }
    
            if(res){
                console.log("Sign Up Successfull!!")
            }
        })
    })

})

app.post('/signIn', (req, res)=>{
    const email=req.body.email;
    const password=req.body.password;

    db.query('SELECT password FROM USERS WHERE email=?', [email], (err, result)=>{
        bcrypt.compare(password, result[0].password, (err2, result2)=>{
            if(result2){
                console.log('Sign In Successfull!!')
                res.send('Sign In Successfull!!')
            }
            if(err2){
                console.log(err2)
            }
        })
    })
})














// app.post('/isEven', (req, res)=>{
//     const num=req.body.val
//     if(num%2==0)
//         // console.log('Even')
//         res.send({answer:"Even"})
//     else
//         // console.log('Odd')
//         res.send({answer: "Odd"})
// })