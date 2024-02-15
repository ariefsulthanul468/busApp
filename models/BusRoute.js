// src/models/BusRoute.js

const { DataTypes } = require('sequelize');
const {sequelize }= require("../configuration/db")

const BusRoutes = sequelize.define('BusRoutes', { // Change model name to BusRoutes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false
  },
  timings: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
sequelize
  .sync()
  .then(() => console.log("successfully created table"))
  .catch((error) => console.log(error));

module.exports = BusRoutes;
