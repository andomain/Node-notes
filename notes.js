console.log('Starting notes.js');
const fs = require('fs');


const addNote = (title, body) => {
    let notes = [];
    const note = { title, body };

    try {
        const notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch(e) {

    }

    const duplicateNotes = notes.filter(note => note.title === title);
    if(duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));        
    } else {
        console.log(`Note${title} already exists`);
    }


}

const getAll = () => {
    console.log(`Getting all notes`);
}

const getNote = (title) => {
    console.log(`Getting note ${title}`)
}

const removeNote = (title) => {
    console.log(`Deleting note ${title}`)    
}


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
}