// //getElementsByClassName
// const elements=document.getElementsByClassName('collection-item');
//
// console.log(elements);
// console.log(elements[0]);
// elements[0].style.color='red';
// elements[1].textContent='do work';



//getElementsByTagName
// const lis=document.getElementsByTagName('li');
//
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color='red';
// lis[1].textContent='do work';

//convert html element by array
// let allVal=Array.from(lis);
//
// //allVal.reverse();
// //console.log(allVal);
//
// allVal.forEach((list,index)=>{
//   console.log(list.className);
//   list.style.color='blue';
//   list.textContent=`${++index} do some stuff`;
// })


//querySelectorAll

let items=document.querySelectorAll('ul.collection li.collection-item');

console.log(items);
console.log(typeof items);
items.forEach((item,index)=>{
    item.style.color='green';
    item.textContent=`${++index}: let's start`;
});

let li_odd=document.querySelectorAll('li:nth-child(odd)');
let li_even=document.querySelectorAll('li:nth-child(even)');


li_odd.forEach((item,index)=>{
    item.style.background='#aaa';
});
li_even.forEach((item,index)=>{
    item.style.background='#ccc';
});
