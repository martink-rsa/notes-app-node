const fs = require('fs');
const JSONFile = require('./1-json.json');

console.log(JSONFile);

// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

JSONFile.name = 'Martin';
JSONFile.age = 36;

const bookJSON = JSON.stringify(JSONFile);

fs.writeFileSync('1-json.json', bookJSON);

console.log(JSONFile);

/* const book = {
  title: 'The New Book',
  author: 'Master Author',
};

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data.title); */
