console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }   
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));        
}

const addNote = (title, body) => {
    const notes = fetchNotes();
    const note = { title, body };

    const duplicateNotes = notes.filter(note => note.title === title);
    
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;    
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
    const notes = fetchNotes();
    const filterNotes = notes.filter(note => note.title !== title);
    saveNotes(filterNotes);

    return notes.length !== filterNotes.length;    
}


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
}