console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

console.log(`Command: ${command}`);
console.log('Yargs: ', argv);

if(command === 'add') {
	const note = notes.addNote(argv.title, argv.body);
	if(note){
		console.log('Note created');
		console.log('---');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.title}`);
	} else {
		console.log('Note title exists');
	}
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.title);
} else if (command === 'remove') {
	const noteRemoved = notes.removeNote(argv.title);
	const message = noteRemoved ? 'Note was removed' : 'No note exists';
	console.log(message);
} else {
	console.log('Command not recognised');
}
