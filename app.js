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

// Write the arguments in the yargs command itself
// 'add'  - for 'add' option
// 'Add a new note' - some constant string
// Give the title and body
//.help() - shows some useful information
const argv=yargs.
    command('add','Add a new note',
    {
      title:{describe:'Title of note',demand:true},
      body:{describe:'Body of note',demand:true},
    })
    .command('list','List All Notes')
    .command('read','Read a note',{title:{describe:'Title of note',demand:true}})
    .command('remove','Remove a note',{title:{describe:'Title of note',demand:true}})
    .help().argv;

var command=argv._[0];
console.log('command:',command);
//command: arglist

//const argv=yargs.argv;
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
// > node app.js add --title=secret3 --body="Some body4 here"
if (command==='add')
{
  console.log("add");
  // Call the function from the notes.js file and pass the arguments from the command line
  //  [Input in command line]
  // node app.js add --title=secrets --body=Godzilla
  var note=notesjs.addNote(argv.title,argv.body);
  // If there is no return value, then note will be assigned as 'undefined'
  if(note){
    console.log('Note Created');
    console.log('------------');
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
  }else{
    console.log('Note is duplicate and title is taken');
  }

}



else if(command==='list')
{
  console.log("list");
  var allNotes=notesjs.getAll();

  if(allNotes){
    console.log('Note found');
    console.log('------------');
    console.log(allNotes);
  }else{
    console.log('Note not found');
  }

  // or use this method with for loop
  console.log(`Printing ${allNotes.length} note(s)`)
  allNotes.forEach((note)=>{
    console.log('------------');
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
  });
}




else if(command==='read'){
  console.log('read');
  var note=notesjs.getNote(argv.title);
  if(note){
    console.log('Note found');
    console.log('------------');
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
  }else{
    console.log('Note not found:',argv.title)
  }
}




// >node app.js remove --title=secret2
else if(command==='remove'){
  console.log('remove');
  var noteRemoved=notesjs.removeNote(argv.title);
  // ternary operator
  var message=noteRemoved?'Note was removed':'Note not present';
  console.log(message);
}
else
{
  console.log("Command is not recognized")
}
