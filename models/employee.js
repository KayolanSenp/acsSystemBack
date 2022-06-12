module.exports = (sequelize, DataTypes)=>{

const employee = sequelize.define('employee',{

RFID:{
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement: false,
},
lastname:{
    type: DataTypes.STRING,
    allowNull: false,
},
firstname:{
    type: DataTypes.STRING,
    allowNull: false,
},
gender:{
    type: DataTypes.STRING,
    allowNull: false,
},
department:{
    type: DataTypes.STRING,
    allowNull: false,
},
},
{
timestamps:false,
});

return employee;
};

