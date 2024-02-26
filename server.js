require("dotenv").config();

const express = require('express');
const {accessToken,refresh } = require("./utils/jsonwebToken")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const {connectDb} = require("./configuration/db")
const BusRoutes = require("./models/BusRoute")
const adminRouter = require("./router/admin.route")
const busRoutesRouter = require("./router/busRoutes")

// Middleware


// Routes
app.use('/api', busRoutesRouter);
app.use("/api/admin",adminRouter)

// Start server
const PORT = process.env.PORT;
connectDb();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
