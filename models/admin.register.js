const {DataTypes} = require("sequelize")
const {sequelize} = require("../configuration/db")

const AdminRegister = sequelize.define('AdminRegister', { 
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  confirm_password: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
    freezeTableName:true,
});
sequelize
  .sync()
  .then(() => console.log("admin register table created"))
  .catch((error) => console.log(error));


module.exports = AdminRegister;