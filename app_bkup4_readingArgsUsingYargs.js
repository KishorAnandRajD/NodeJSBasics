console.log('Starting app.js');

// import the fs module to do operations on file system objects
//https://nodejs.org/api/fs.html
const fs=require('fs');

const notesjs=require('./notes');// Importing custom js file

const _=require('lodash');// Lodash Utility (after npm install lodash)

const yargs=require('yargs');// Yargs library for parsing user inputs/command line argument

// User input from command line.
//console.log(process.argv);
// node app.js arglist  (arglist is the user input as argument)
/*
[ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\Kishor\\Udemy\\NodeJS\\NodeJSProjects\\Project1\\app.js',
  'arglist' ]
*/
//var command=process.argv[2];  // arglist is the third one and so [2]
//or
var command=yargs.argv._[0];
console.log('command:',command);
//command: arglist

const argv=yargs.argv;
console.log('yargs argv:',argv);
//   [Input in command line]
//node app.js add  encrypted decrypted
//  [Output]
//yargs argv: { _: [ 'add', 'encrypted', 'decrypted' ], '$0': 'app.js' }

//   [Input in command line]
//node app.js add --title=secrets --subject=Godzilla --director=James
// [Output]
/*yargs argv: { _: [ 'add' ],
  title: 'secrets',
  subject: 'Godzilla',
  director: 'James',
  '$0': 'app.js' }
*/


// If the argument is 'add' then do this
if (command==='add')
{
  console.log("add");
  // Call the function from the notes.js file and pass the arguments from the command line
  //  [Input in command line]
  // node app.js add --title=secrets --body=Godzilla
  notesjs.addNote(argv.title,argv.body);
}else if(command==='list')
{
  console.log("list");
  notesjs.getAll();
}else if(command==='read'){
  console.log('read');
  notesjs.getNote(argv.title);
}
else if(command==='remove'){
  console.log('remove');
  notesjs.removeNote(argv.title);
}
else
{
  console.log("Command is not recognized")
}
