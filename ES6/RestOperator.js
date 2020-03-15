let numbers=[3,4,1,5,7,9];

let sumAll=(arr)=>{
  let finalSum=0;
  for(let i=0;i<arr.length;i++){
    finalSum+=arr[i];
  }
  return finalSum;
}

console.log(sumAll(numbers));
