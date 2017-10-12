/* 1. Convert a object to JSON String using stringify
   2. Write the JSON String to a file
   3. Read the File contents as String
   4. Convert the String into Object
*/
const fs=require('fs');

var originalNote={
  title:'Some title',
  body:'Some body'
};

// Convert Object to JSON string object
var originalNoteString=JSON.stringify(originalNote);

console.log(typeof originalNoteString);  // get the data type
console.log(originalNoteString);

// Write to a file (file gets created in the same directory)
fs.writeFileSync('notes.json',originalNoteString);

// Read from the file
var noteString=fs.readFileSync('notes.json');
// Convert JSON to object
var note=JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);

/*
node json.js
string
{"title":"Some title","body":"Some body"}
object
Some title
*/
