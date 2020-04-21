// Requires path package
var path = require("path");

module.exports = function(app) {
  // HTML GET Requests
  app.get("/survey", function(req, res) {                             /////visual studio is saying _req?????
    res.sendFile(path.join(__dirname, "../public/survey.html"));   
  });

  // If no matching route is found default to home
  app.get("*", function(_req, res) {                                /////visual studio is saying _req?????
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
