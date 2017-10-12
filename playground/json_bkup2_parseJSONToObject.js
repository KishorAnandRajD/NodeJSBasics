var personString='{"name":"Kishor","age":33}';

// Convert JSON to object
var person=JSON.parse(personString);

console.log(typeof person);// Get the data type
console.log(person);
/*
node json.js
object
{ name: 'Kishor', age: 33 }
*/
