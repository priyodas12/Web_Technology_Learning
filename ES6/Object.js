let emp={
  name:"priyo",
  employer:"Infy"
};

console.log(emp);
//will take value from name,employer
let name="priya";
let employer="Infy";
let emp2={
  name,
  employer,
  "greet emp"(){
    console.log("hey There!")
  },
  greet(){
    console.log("hey There you!")
  }
};
console.log(emp2);
emp2["greet emp"]();
emp2["greet"]();
