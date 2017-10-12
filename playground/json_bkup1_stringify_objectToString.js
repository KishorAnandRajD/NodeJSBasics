var obj={
  name:'Kishor'
};

// Convert Object to JSON string object
var stringObj=JSON.stringify(obj);

console.log(typeof stringObj);  // check the data type

console.log(stringObj);
/*
>node json.js
string
{"name":"Kishor"}
*/
