const express = require('express');
const route = express.Router();

const {employee} = require('../models');

//Get request from db
route.get("/",async(req,res)=>{
const employees = await employee.findAll();

res.json(employees);
});


//Post request to db
route.post("/",async(req,res)=>{
const values = req.body;
const createdEmployee= await employee.create(values);
res.json(createdEmployee);


});

module.exports = route;

