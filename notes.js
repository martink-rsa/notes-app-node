const chalk = require('chalk');
const fs = require('fs');

const getNotes = function () {
  return 'getNotes() return';
};

const addNote = (title, body) => {
  // Add a note to the list of notes
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.inverse.green('Add note:'), 'New note added');
  } else {
    console.log(chalk.inverse.red('Add note:'), 'Duplicate note found!');
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);
  if (notes.length > updatedNotes.length) {
    saveNotes(updatedNotes);
    console.log(chalk.inverse.green('Remove note:'), `'${title}' removed`);
  } else {
    console.log(chalk.inverse.red('Remove note:'), 'No note found!');
  }
};

const loadNotes = () => {
  // Utility function to get the list of notes
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  try {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
  } catch (e) {}
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse('Your notes:'));
  notes.forEach((note, i) => console.log(`${i + 1}: ${note.title}`));
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(note.title);
    console.log(note.body);
  } else {
    console.log(chalk.inverse.red('ERROR:'), 'No note found');
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
