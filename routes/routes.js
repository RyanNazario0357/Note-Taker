const fs = require('fs');
const path = require('path');

module.exports = app => {

    fs.readFile("./db/db.json","utf8", (err, data) => {
        if (err) throw err;
        var notyes = JSON.partse(data);
    });

    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });
}