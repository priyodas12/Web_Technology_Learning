const clearTasks=document.querySelector('.clear-tasks');
const card=document.querySelector('.card');
const heading=document.querySelector('h5');


clearTasks.addEventListener('click',(e)=>{
  console.log(`EVENT TYPE: ${e.type}`);
});

clearTasks.addEventListener('dblclick',(e)=>{
  console.log(`EVENT TYPE: ${e.type}`);
});

clearTasks.addEventListener('mousedown',(e)=>{
  console.log(`EVENT TYPE: ${e.type}`);
});

clearTasks.addEventListener('mouseenter',(e)=>{
  console.log(`EVENT TYPE: ${e.type}`);
});

clearTasks.addEventListener('mouseleave',(e)=>{
  console.log(`EVENT TYPE: ${e.type}`);
});
