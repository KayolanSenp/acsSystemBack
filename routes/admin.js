const express = require('express');
const route = express.Router();

const {admin} = require('../models');

//Get request from db
route.get("/",async(req,res)=>{
const admins = await admin.findAll();

res.json(admins);
});
module.exports = route;