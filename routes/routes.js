const fs = require('fs');
const path = require('path');

module.exports = app => {

    fs.readFile("./db/db.json","utf8", (err, data) => {
        if (err) throw err;
        var notyes = JSON.partse(data);
    });
//get api route
    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });
//steup post route
    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        notes.push(newNote);
        updateDb();
        return console.log("added new note: "+newNote.title);
    });

    
}