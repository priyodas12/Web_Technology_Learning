//create createElement

const li=document.createElement('li');
//add class
li.className="collection-item";
//add id
li.id="new-item";
//add attribute
li.setAttribute('title','new-item-added');

//create textNode and append
li.appendChild(document.createTextNode('Hello World!'));

//create new link element
const link=document.createElement('a');

//set class name
link.className="delete-item secondary-content";

link.innerHTML= '<i class="fa fa-remove"></i>';

li.appendChild(link);
//append li as child of ui
document.querySelector('ul.collection').appendChild(li);

console.log(li);
