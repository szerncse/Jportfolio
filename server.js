const express = require('express');
const app = express();
const port = 6000


app.get(6000, ()=>{
    console.log(`${port}번호에서 서버 실행중`)
    })


    app.get('/', (req,res)=>{
        res.send("Hello World");
        })
        
        app.get('/about', (req,res)=>{
            res.send("어바웃 페이지zz");
            })
        
        app.get('/seojin', (req,res)=>{
            res.send("나의 페이지");
            })