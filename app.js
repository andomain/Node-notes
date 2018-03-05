console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const util = require('./utils');

const argv = yargs.argv;
const command = argv._[0];

console.log(`Command: ${command}`);
console.log('Yargs: ', argv);

if(command === 'add') {
	const note = notes.addNote(argv.title, argv.body);
	if(note){
		console.log('Note created');
		console.log('---');
		util.printNote(note);
	} else {
		console.log('Note title exists');
	}
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	const note = notes.getNote(argv.title);
	if(note) {
		console.log('Note found');
		console.log('---')
		util.printNote(note);
	} else {
		console.log('Note not found');
	}
} else if (command === 'remove') {
	const noteRemoved = notes.removeNote(argv.title);
	const message = noteRemoved ? 'Note was removed' : 'No note exists';
	console.log(message);
} else {
	console.log('Command not recognised');
}
