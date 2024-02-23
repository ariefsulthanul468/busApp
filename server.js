require("dotenv").config();

const express = require('express');
const {accessToken,refresh } = require("./utils/jsonwebToken")
const adminReg = require("./models/admin.register")
const app = express();

const {connectDb} = require("./configuration/db")
const BusRoutes = require("./models/BusRoute")
const busRoutesRouter = require("./router/busRoutes")

// Middleware
app.use(express.json());

// Routes
app.use('/api', busRoutesRouter);

// Start server
const PORT = process.env.PORT;
connectDb();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
