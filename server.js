'use strict';

// Load array of notes
const express = require('express');
const data = require('./db/notes');

const app = express();

app.listen(8083,function(){
  console.info(`Server listening on ${this.address().port}`);  
}).on('error',err =>{
  console.error(err);
});

app.get('/api/notes',(req,res)=>{
  res.json(data);
});

app.get('/api/notes/:id',(req,res)=>{
  res.json(data.find(item => item.id === Number(req.params.id)));
});






