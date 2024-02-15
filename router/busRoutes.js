// src/routes/busRoutes.js

const express = require('express');
const router = express.Router();
const BusRoutes = require("../models/BusRoute");
const { getBusRoutes, postBusRoutes } = require('../controllers/busRouteController');

router.get('/bus-routes', getBusRoutes);
router.post('/bus-routes', postBusRoutes);
  
module.exports = router;
