if(true){
  let a=10;
}//let having block scope
let a=24;
const B=20;
a=30;
//b=50; //TypeError: Assignment to constant variable
console.log(a*B);

//this ROADS will be pointing to the object location.
const ROADS=["3A","4G","6H"];
console.log(ROADS);
//pointer can not been changed but the values can be altered.
ROADS.push("8J");
console.log(ROADS);

//hoisting of variable for let implicit

c=20;
console.log(c);
var c;//this will not work for let or const
