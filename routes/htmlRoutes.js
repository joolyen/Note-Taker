// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
// HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content
// ---------------------------------------------------------------------------
 
    //adding to bring stylesheet in - you must grant access to static files in server.js file
    app.get('styles', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/assets/css/styles.css'));
    });
  
    //path for pages on the site
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("/bubbles", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/bubbles.html"));
    });

// If no matching route is found default to home - ***NEEDS TO BE UNDERNEATH OTHER ROUTES***
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
