document.querySelector('.clear-tasks').addEventListener('click',(e)=>{
  console.log('am clicked')
  e.preventDefault();
});

document.querySelector('#task-title').addEventListener('click',(e)=>{
  console.log('am clicked on task')
  let a=document.getElementById('task-title');
  a.style.color='red';
  e.preventDefault();
});
