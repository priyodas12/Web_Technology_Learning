let numbers=[3,4,1,5,7,9];
//rest is for function
let sumAll=(...arr)=>{
  let finalSum=0;
  for(let i=0;i<arr.length;i++){
    finalSum+=arr[i];
  }
  return finalSum;
}

console.log(sumAll(...numbers));

//from left to right adding
console.log(sumAll(12,2,3,4,5));
// :o/p-26a
console.log(sumAll(12,2,3,4,5,"a"));
