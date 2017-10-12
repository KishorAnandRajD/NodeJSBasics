console.log('Starting app.js');

// import the fs module to do operations on file system objects
//https://nodejs.org/api/fs.html
const fs=require('fs');

// Operating System (OS) module
//https://nodejs.org/api/os.html
const os=require('os');

// Importing custom js file
const notesjs=require('./notes');

const _=require('lodash');// Lodash Utility (after npm install lodash)

var user=os.userInfo();
console.log('User:',user);

// Add the os username to the content - USING TEMPLATE STRING
// Add the age property value from the notes.js file
fs.appendFile('greetings.txt',`Wish you a Happy New Year ${user.username}!! USING TEMPLATE STRING. You are ${notesjs.age}.`,function(err){
  if(err){
    console.log('Unable to write to a file because of error');
  }
});


//Calling the function from another JS file
var result=notesjs.addNote();
console.log('result',result);

// Call function 'add' from notes.js file
console.log('Addition of 2 numbers: ',notesjs.add(3,4));

// using lodash
//https://lodash.com/docs/4.17.4#isString
console.log('lodash string check: ',_.isString(true));
// Output is false because its boolean
console.log('lodash string check: ',_.isString('Kishor'));
// Output is true

// Lodash to remove duplicates https://lodash.com/docs/4.17.4#uniq
console.log('lodash duplicates removed array: ',_.uniq(['Anand','raj','Anand','Kishor']));
// Ouput is  [ 'Anand', 'raj' ]
