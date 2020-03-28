const number=[3,9,6,4,1,0];
const numbers=new Array(3,9,6,4,1,0);
const stringArray=['qs','jdj','oo'];
const mixedArray=[1,'as',[2,4,5],{'a':10},null,undefined,true,new Date()];


console.log(mixedArray);
let val;
val=number.length;
val=Array.isArray(number);
val=number[3];
number[3]=100;
val=number.indexOf(100);
number.push(90);//add at last
number.unshift(23);//adds first
number.shift();//removes from last
number.pop();//remove last
console.log(number);
number.splice(1,2);//start and end are inclusive
number.reverse();
val=number.concat(numbers);
val=val.sort((x,y)=>{return y-x});
val=number.find(num=>{return num<4});//find 1st number under 4
console.log(val);
