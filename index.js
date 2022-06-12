const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();

app.use(express.json());
app.use(cors());
const db = require("./models");


//Routes
const employee = require("./routes/employee");
const logs = require("./routes/log");
const admins = require("./routes/admin");

app.use("/employee",employee);
app.use("/log",logs);
app.use("/admin",admins);

db.sequelize.sync().then(()=> {

    app.listen(process.env.PORT||3001,()=>{
        console.log("Server has started....");
    }); 
})
.catch(err =>{
    console.log(`Error connecting : ${err.message}`);
})

