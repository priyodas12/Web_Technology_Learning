//id selector
console.log(document.querySelector('#task-title'));
//class selector
console.log(document.querySelector('.card-title'));
//random selection,always return 1st one
console.log(document.querySelector('a'));

//target for more than one element
document.querySelector('li').style.color='violet';
//subclass
document.querySelector('ul li').style.color='green';
//last child
document.querySelector('li:last-child').style.color='blue';
//nth child
document.querySelector('li:nth-child(3)').style.color='violet';
//text context change
document.querySelector('li:nth-child(4)').textContent='Yoga';
document.querySelector('li:nth-child(3)').textContent='Jogging';

//even-odd selector
document.querySelector('li:nth-child(3)').textContent='Jogging';
