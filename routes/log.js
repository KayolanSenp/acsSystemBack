const express = require('express');
const route = express.Router();



//Get request from db

const {logs} = require('../models');
route.get("/",async(req,res)=>{
    const logno = await logs.findAll();
    res.json(logno);

});




//Post request to db
route.post("/",async(req,res)=>{
const values = req.body;
const createdEmployee= await employee.create(values);
res.json(createdEmployee);


});

module.exports = route;

