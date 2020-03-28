let val;
//document properties
val=window.document;
val=document.all;//HTMLCollection
val=document.all[1];
val=document.all.length;

val=document.head;
val=document.domain;
val=document.URL;

val=document.forms;//HTMLCollection
val=document.forms[0].id;
val=document.forms[0].method;

val=document.links;//HTMLCollection
val=document.links[0].id;
val=document.links[0].className;
val=document.links[0].classList;

val=document.scripts;
val=document.scripts[1].getAttribute('src');
val=document.scripts[2].getAttribute('src');

//for each iteration

let allVal=Array.from(document.all);

allVal.forEach(a=>{
  console.log(a);
});
console.log(val);
