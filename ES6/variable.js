if(true){
  let a=10;
}//let having block scope
let a=24;
const b=20;
a=30;
//b=50; //TypeError: Assignment to constant variable
console.log(a*b);
