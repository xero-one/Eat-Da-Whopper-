/*Set express to a constant global variable and init the npm express to run with this route body javascript code*/
const express = require("express");

/*We use the "express.router" class to create route handlers, basically init a routing system*/
const router = express.Router();

const htmlRoutes = require("./html");

const apiRoutes = require("./api");

/*Call express npm to render the home path request and render api route info*/
router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

router.get("*",function(req,res){
    res.render("fileNotAvailable404",{layout:'error'});
  })

/*"module.exports" export the route so it's available in other parts of the app*/
module.exports = router;