// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var notes = require("../db/db.json");
var fs = require("fs");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
// API GET Request
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

    app.get("/api/notes", function(req, res) {
        fs.readFileSync("./db/db.json", "utf8");
        return res.json(notes);
    });

    //This is our request to post a new note. We define an id to track and delete notes, see code below

    app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        var noteID = (notes.length).toString();
        newNote.id = noteID;
        notes.push(newNote);
        return res.json(newNote)
    });

    //Here's the delete request. We're using the notes id that we adding to db.json and defined above

    app.delete("/api/notes/:id", function(req, res) {
        var id = req.params.id.toString();
        for (i=0; i < notes.length; i++) {
            if (notes[i].id == id) {
                res.send(notes[i]);
                notes.splice(i, 1);}
        }
    });
};

