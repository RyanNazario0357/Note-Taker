var $noteTitle = $(".note-title");
var $noteText = $(".note-textarea");
var $saveNoteBtn = $(".save-note");
var $newNoteBtn = $(".new-note");
var $noteList = $(".list-container .list-group");

var activeNote = {};

var getNotes = function() {
    return $.ajax({
        url: "/api/notes",
        method: "GET"
    });
};

