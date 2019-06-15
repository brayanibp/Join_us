const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'join_us'
});



app.get('/',function(req,res){
    let query = 'SELECT COUNT(*) AS total FROM users';
    connection.query(query, (err,result)=>{
        if (err) throw err;
        let count = result[0].total;
        res.render('home', {count: count} );
    });
});

app.post('/register',function(req,res){
    const person = { email: req.body.email };
        
    connection.query('INSERT INTO users SET ?', person, (err,result)=>{
        if (err) throw err;
        console.log(result);
    });
    res.redirect('/');
});

app.get('/register',function(req,res){
    res.redirect('/');
});

app.get('*',function(req,res){
    res.send(`I'm Sorry I don't got that URL.`)
});

app.listen(port,()=>{
    console.log(`Running at Port: ${port}`);
});

// connection.end();