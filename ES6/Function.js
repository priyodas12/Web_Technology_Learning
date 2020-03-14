//traditional way or ES5

function fn(){
  console.log("\nthis is ES5 function syntax!\n");
}

fn();

let func=()=>{
  console.log("\nThis is ES6 function syntax!\n ");
}

func();

let constSum=()=>{
  const a=20;
  const j=3;
  return a|j;
}

console.log(constSum());
