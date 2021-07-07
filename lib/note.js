const fs = require("fs");
const path = require("path");

  function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data.notes.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.name || typeof note.name !== 'string') {
        return false;
    }
    if (!note.species ||typeof note.species !== 'string') {
        return false;
    }
    if (!note.diet || typeof note.diet !== 'string') {
        return false;
    }
    if (!note.personalityTraits || !Array.isArray(note.personalityTraits)) {
        return true;
    }
}

module.exports = {
    createNewNote,
    validateNote
  };