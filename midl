var express = require('express');
var app = express();

// Define a middleware before the response is sent
app.use(function(req, res, next) {
    // Log a message at the start
    console.log("Start");

    // Call the next function
    next();
});

// Route handler for GET request to the root route ("/")
app.get('/', function(req, res, next) {
    // Send the response "Middle"
    res.send("Middle");
    next();
});

// Second middleware for the root route ("/")
app.use('/', function(req, res) {
    // Log "End" when this middleware is reached
    console.log("End");
});

// Start the server
app.listen(3000, function() {
    console.log("Server is running at: http://localhost:3000/");
});
