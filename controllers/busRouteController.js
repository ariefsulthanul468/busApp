const router = require("../router/busRoutes");
const sequelize = require("../configuration/db")
const BusRoutes = require("../models/BusRoute")

exports.getBusRoutes = async (req, res) => {
  try {
    const busRoutes = await BusRoutes.findAll();
    if (busRoutes.length === 0) {
      return res.status(404).json({ message: "Data Not Found" });
    }
    res.json(busRoutes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.postBusRoutes = async (req, res) => {
  const { source, destination, timings } = req.body;

  try {
    const newBusRoute = await BusRoutes.create({
      source,
      destination,
      timings,
    });
    res.status(201).json(newBusRoute);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to insert bus route" });
  }
};


