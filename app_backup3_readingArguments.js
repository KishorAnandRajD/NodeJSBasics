console.log('Starting app.js');

// import the fs module to do operations on file system objects
//https://nodejs.org/api/fs.html
const fs=require('fs');

// Importing custom js file
const notesjs=require('./notes');

const _=require('lodash');// Lodash Utility (after npm install lodash)

// User input from command line.
console.log(process.argv);
// node app.js arglist  (arglist is the user input as argument)
/*
[ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\Kishor\\Udemy\\NodeJS\\NodeJSProjects\\Project1\\app.js',
  'arglist' ]
*/
var command=process.argv[2];  // arglist is the third one and so [2]
console.log('command:',command);
//command: arglist

// If the argument is 'add' then do this
if (command==='add')
{
  console.log("Adding note");
}else if(command==='arglist')
{
  console.log("Command is arglist");
}else if(command==='read'){
  console.log('Reading note');
}
else if(command==='remove'){
  console.log('Remove note')
}
else
{
  console.log("Command is not recognized")
}
