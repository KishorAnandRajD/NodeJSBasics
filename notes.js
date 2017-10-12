console.log('Starting notes.js');

const fs=require('fs'); // File System Core module(no need to npm install)

var fetchNotes=()=>{
  // If you want to append to existing file - get the contents of the file into the notes[]array and then use a .push to add the new entry

  // Check if the file already exists by using catch block
  try{
    var notesString=fs.readFileSync('notes-data.json');
    //https://www.w3schools.com/js/js_json.asp
    notes=JSON.parse(notesString); // convert from JSON String to Object by using parse
    return notes;
  }catch(e){
    // If any error, just ignore and move to next step
    // Error could be file not found or corrupt file or contents
    return [];  //  Empty error
   }

};

var saveNotes=(notes)=>{
  // write to a file after converting into JSON string
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote=(title,body)=>{
   console.log('Adding note',title,body);
   var notes=fetchNotes();
   var note={
     title: title,
     body:body
   };

   // Check for duplicate entries in the notes[] array
   //inbuilt callback function
//https://www.tutorialspoint.com/javascript/javascript_arrays_object.htm
   var duplicateNotes=notes.filter((note)=>{
     return note.title===title;  // duplicate titles. Return true or false
   });
    //the new array duplicateNotes[] will only contain the matching title
   // If duplicate titles are not present
   if(duplicateNotes.length===0){
     // Add note to the notes[] array
     //https://www.w3schools.com/js/js_array_methods.asp
     notes.push(note);
     // write to a file after converting into JSON string
     saveNotes(notes);
     return note;
   }else{
     console.log('Duplicate title:',title);
   }

};

var getAll=()=>{
   console.log('Getting All notes');
   //Fetch the notes
    var notes=fetchNotes();
    return notes;
};

var getNote=(title)=>{
   console.log('Getting the note: ',title);
   //Fetch the notes
    var notes=fetchNotes();

    // Filter notes and find the title and the new array will only contain the matching title
    var filteredNotes=notes.filter((note)=>{
      return note.title===title; // return true of note title matches with argument title
    });

    // The filteredNotes will contain only the title matching and thus only one value
    return filteredNotes[0];
};

var removeNote=(title)=>{
   console.log('Removing the note: ',title);
   // Fetch the notes
   var notes=fetchNotes();

   // Filter notes, removing the one with matching title of argument
     //the new array filteredNotes[] will contain objects with no matching titles
   var filteredNotes=notes.filter((note)=>{
     return note.title!==title; // return true of duplicate is not found, else false
   });

   // Save new notes array
   saveNotes(filteredNotes);
   // return true if note was removed, else false by comparing the lengths of original notes and filteredNotes
   return notes.length!==filteredNotes.length;
};


module.exports= {
  addNote:addNote,
  getAll:getAll,
  getNote:getNote,
  removeNote:removeNote
};
