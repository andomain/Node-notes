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
    return fetchNotes();
}

const getNote = (title) => {
    const notes = fetchNotes();
    const foundNote = notes.filter(note => note.title === title);
    return foundNote[0];
}

const removeNote = (title) => {
    const notes = fetchNotes();
    const filterNotes = notes.filter(note => note.title !== title);
    saveNotes(filterNotes);

    return notes.length !== filterNotes.length;    
}

const logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`); 
}


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote,
}