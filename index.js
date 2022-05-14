const express = require('express');
const mysql = require('mysql');
const app = express();
//Create SQL connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234'
});

//Connect
db.connect((err) => {
    if(err){
        console.log(err);
    }
    console.log("My sql connected");
});

//Create DB
app.get('/createdb', (req, res) =>{
    let sql = 'CREATE DATABASE my-database';
    db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send('Dtabase Created.....');
    });
});




app.listen('3000    ', ()=>{
    console.log("server started at port 3000");
});