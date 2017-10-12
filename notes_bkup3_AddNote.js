console.log('Starting notes.js');

const fs=require('fs'); // File System Core module(no need to npm install)

var addNote=(title,body)=>{
   console.log('Adding note',title,body);
   var notes=[];
   var note={
     title: title,
     body:body
   };

   // If you want to append to existing file - get the contents of the file into the notes[]array and then use a .push to add the new entry

   // Check if the file already exists by using catch block
   try{
     var notesString=fs.readFileSync('notes-data.json');
     notes=JSON.parse(notesString); // convert from JSON String to Object by using parse
   }catch(e){
     // If any error, just ignore and move to next step
     // Error could be file not found or corrupt file or contents
   }

   // Check for duplicate entries in the notes[] array
   //inbuilt callback function
   var duplicateNotes=notes.filter((note)=>{
     return note.title===title;  // duplicate titles. Return true or false
   });

   // If duplicate titles are not present
   if(duplicateNotes.length===0){
     // Add note to the notes[] array
     notes.push(note);

     // write to a file after converting into JSON string
     fs.writeFileSync('notes-data.json',JSON.stringify(notes));
   }else{
     console.log('Duplicate title:',title);
   }

};

var getAll=()=>{
   console.log('Getting All notes');
};

var getNote=(title)=>{
   console.log('Getting the note: ',title);
};

var removeNote=(title)=>{
   console.log('Removing the note: ',title);
};


module.exports= {
  addNote:addNote,
  getAll:getAll,
  getNote:getNote,
  removeNote:removeNote
};
