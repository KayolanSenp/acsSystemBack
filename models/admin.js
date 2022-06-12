module.exports = (sequelize, DataTypes)=>{

    const admin = sequelize.define('admin',{
    
    
    loginid:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },    
    },
    {
    timestamps:false,
    });
    
    return admin;
    };
    
    