console.log('Starting notes.js');

var addNote=(title,body)=>{
   console.log('Adding note',title,body);
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
