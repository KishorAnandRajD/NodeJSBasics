console.log('Starting app.js');

// import the fs module to do operations on file system objects
//https://nodejs.org/api/fs.html
const fs=require('fs');

// Operating System (OS) module
//https://nodejs.org/api/os.html
const os=require('os');

// Importing custom js file
const notesjs=require('./notes');

// (FileName, Content)
// If no path is specified, the file gets created in the same location
//fs.appendFile('greetings.txt','Wish you a Happy New Year');

// or (if there is warning in the first statement)
// If no path is specified, the file gets created in the same location
// (Filename,Content, Callback fn for error)
fs.appendFile('greetings.txt','Wish you a Happy New Year',function(err){
  if(err){
    console.log('Unable to write to a file because of error');
  }
});

// or
// fs.appendFileSync('greetings.txt','Wish you a Happy New Year');

var user=os.userInfo();
console.log('User:',user);

// Add the os username to the content
fs.appendFile('greetings.txt','Wish you a Happy New Year ' + user.username + '!!',function(err){
  if(err){
    console.log('Unable to write to a file because of error');
  }
});

// Add the os username to the content - USING TEMPLATE STRING
fs.appendFile('greetings.txt',`Wish you a Happy New Year ${user.username}!! USING TEMPLATE STRING`,function(err){
  if(err){
    console.log('Unable to write to a file because of error');
  }
});

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
