console.log('Starting notes.js');

console.log('module:' ,module);
module.exports.age=26; // module  can use a property like item which can be exported and used in another js file

// module can also export function
module.exports.addNote=function(){
  console.log('inside addNote function');
  return 'New Note';
};
// ES6 Syntax
// module.exports.addNote=()=>{
//   console.log('inside addNote function');
//   return 'New Note';
// };

module.exports.add=(a,b)=>{
  return a+b;
}
