//Replace element

//create element
const newHeading=document.createElement('h2');
//a
newHeading.id='task-title';

newHeading.className='test';

newHeading.style.color='blue';

newHeading.appendChild(document.createTextNode('Task-Queue'));

//replaceElement
const oldHeading=document.getElementById('task-title');

const cardAction=document.querySelector('.card-action');

cardAction.replaceChild(newHeading,oldHeading);

const lis=document.querySelectorAll('li');
const list=document.querySelectorAll('ul');

lis[0].remove();
list.removeChild(lis[3]);

console.log(newHeading);
