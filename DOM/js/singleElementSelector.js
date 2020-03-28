//document.getElementById();

console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').className);

//change styling
document.getElementById('task-title').style.background='orange';
document.getElementById('task-title').style.color='#fff'
document.getElementById('task-title').style.padding='3px'

//change content
//text content
document.getElementById('task-title').textContent='Task Allocated to You';
//or use this document.getElementById('task-title').innerText='Task list';

//insert html content

const tasks_title=document.getElementById('task-title');
tasks_title.innerHTML='<span style="color:white">Task Allocated to You</span>';
