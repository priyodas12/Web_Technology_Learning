let numbers=[1,2,3,4,5,6,9];
//print list of numbers
console.log(...numbers);
//NaN
console.log(Math.max(numbers));//expects a list
console.log(Math.max(...numbers))//9
