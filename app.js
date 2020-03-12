const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function() {
    console.log(chalk.yellow('Adding a new note.'));
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  handler: function() {
    console.log('Removing the note');
  },
});

// Add. remove, read, list notes

console.log(yargs.argv);
