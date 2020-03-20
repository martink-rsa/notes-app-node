const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // Demands the key to be required
      type: 'string', // Sets the data type of the value
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
    console.log(chalk.inverse('Title:\t'), argv.title);
    console.log(chalk.inverse('Body:\t'), argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  handler: function() {
    console.log(chalk.yellow('Removing the note'));
  },
});

// Create the read command
yargs.command({
  command: 'read',
  describe: 'Reads a note',
  handler: function() {
    console.log(chalk.yellow('Reads a note'));
  },
});

// Create the list command
yargs.command({
  command: 'list',
  describe: 'Lists the notes',
  handler: function() {
    console.log(chalk.yellow('Lists the notes'));
  },
});

yargs.parse(); // Trigger yargs to parse through the command arguments
