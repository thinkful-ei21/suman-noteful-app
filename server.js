'use strict';

// Load array of notes
const express = require('express');

const {PORT} = require('./config');
const {logger} = require('./middleware/logger');
const app = express();
const router = require('./router/notes.router.js');
app.use(express.static('public'));
app.use(express.json());//parse request body
app.use(logger);

app.use('/api',router);

//404 handler
app.use(function(req,res,next){
  let err = new Error('Not Found');
  err.status = 404;
  res.status(404).json({message: 'Not Found'});
});

//custom error handler
app.use(function(err,req,res,next){
  res.status(err.status || 500);
  res.json({
    message:err.message,
    error: err,
  });
});


app.listen(PORT,function(){
  console.info(`Server listening on ${this.address().port}`);  
}).on('error',err =>{
  console.error(err);
});










