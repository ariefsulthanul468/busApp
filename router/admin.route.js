const express = require('express');
const adminRouter = express.Router();
const {Register} = require("../controllers/admin.controller")


adminRouter.post("/register",Register)




module.exports = adminRouter;