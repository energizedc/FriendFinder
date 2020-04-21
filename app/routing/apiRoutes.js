// Requires friends js file
var friends = require("../data/friends");

module.exports = function(app) {
    // API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
       console.log(" regbody   ",req.body)
        // Capture new input into variable
        var newInput = req.body.scores;
        console.log("new input    ",newInput);
        // Create new array to hold differences
        var differencesArray = [];
        var match = 0;

        // Loop through friends
        for (var i = 0; i < friends.length; i++) {
            // Add the Total Difference variable
            var totalDifference = 0;
            //Loop through questions
            for (var j = 0; j < 10; j++) {
                totalDifference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newInput[j])));
            }
            differencesArray.push(totalDifference);
            console.log(differencesArray);
        }

        // Loop through difference array
        for (var i = 0; i < differencesArray.length; i++) {
            // Find the lowest number difference
            if (differencesArray[i] <= differencesArray[match]) {
                match = i;
            }
        }

        // Create variable for new friend and send it
        var newFriend = friends[match];
        res.json(newFriend);

        // Push the values into the array.
        friends.push(req.body);
    });
};