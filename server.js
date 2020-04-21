// Required packages
var express = require("express");
//var bodyParser = require("body-parser");

// Tells node we are creating an express server
var app = express();

// Specifies port
var PORT = process.env.PORT  || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));   ///*****question on true of false?????
app.use(express.json())
//app.use(bodyParser.json());

// Points server to route files
require("./app/routing/apiRoutes")(app);                  //// ***question
require("./app/routing/htmlRoutes")(app);             

// Console logs port and starts server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
