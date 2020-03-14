//traditional way or ES5

function fn(){
  console.log("\nthis is ES5 function syntax!\n");
}

fn();
//es6 way
let func=()=>{
  console.log("\nThis is ES6 function syntax!\n ");
}

func();
//with return type
let constSum=()=>{
  const a=20;
  const j=3;
  return a|j;
}

console.log(constSum());

//with arguments
let sum=(m,n)=>{
  return m+n;
}

console.log("Sum :"+sum(23,78));


//tricky 1
let sum2=m=>{
  return m+10;
}

console.log("Sum :"+sum2(23,78));

//annonyoums function
setTimeout(()=>console.log("after 2 sec"),2000);


//print window object
function fn2(){
  console.log(this);
}

fn2();

//with default values
let fn3=(k=13,l=26)=>{
  return k*l;
}
console.log("With Default value: "+fn3())
