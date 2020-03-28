let val;

const list=document.querySelector('ul.collection');
const listItem=document.querySelector('li.collection-item:first-child');

val=list;
val=listItem;

//get child node
val=list.childNodes;//including text node;as aline break
//get children element childern
val=list.children[0];//most prefarable
list.children[0].textContent='Hello';
val=list.firstChild;//text
val=list.firstElementChild;//actual list element
val=list.lastChild;
val=list.lastElementChild;
val=list.childElementCount;
val=listItem.parentNode;
val=listItem.parentNode.parentNode;
console.log(val);
