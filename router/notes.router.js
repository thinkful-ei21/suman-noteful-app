'use strict';

let express = require('express');
let router = express.Router();

const data = require('../db/notes');
const simDB = require('../db/simDB');
const notes = simDB.initialize(data);

router.get('/notes',(req,res,next)=>{
  const {searchTerm} = req.query;
  notes.filter(searchTerm)
    .then(items =>{
      if(items){
        res.json(items);
      }else{
        next();
      }    
    })
    .catch(err =>{
      next(err);
    }); 
});


router.get('/notes/:id',(req,res,next)=>{
  const id = req.params.id;
  notes.find(id)
    .then(item =>{
      if(item){
        res.json(item);
      }else{
        next();
      }
    })
    .catch(err => {
      next(err);
    });   
});

router.put('/notes/:id',(req,res,next)=>{
  const id = req.params.id;

  const updateObj = {};
  const updateField = ['title','content'];

  updateField.forEach(field => {
    if(field in req.body){
      updateObj[field] = req.body[field];
    }
  });

  notes.update(id,updateObj)
    .then(item => {
      if(item){
        res.json(item);
      }else{
        next();
      }
    })
    .catch(err =>{
      next(err);
    });  
});

router.post('/notes',(req,res,next)=>{
  const {title,content} = req.body;
  const newItem = {title,content};

  //validating
  if(!newItem.title){
    const err = new Error('Missing `title` in request body');
    err.status = 400;
    return next(err);
  }
  notes.create(newItem)
    .then(item =>{
      if(item){
        res.location(`http://${req.headers.host}/notes/${item.id}`).status(201).json(item);
      }else{
        next();
      }
    })
    .catch(err =>{
      next(err);
    }); 
});

router.delete('/notes/:id',(req,res,next)=>{
  const id = req.params.id;
  notes.delete(id)
    .then(len => {
      if(len){
        res.status(204).end();
      }else{
        res.status(404).end();
      }
    })
    .catch(err => {
      next(err);
    });  
});

module.exports = router;