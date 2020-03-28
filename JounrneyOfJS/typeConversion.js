let a;

a=5;

console.log(a);
console.log(typeof a);
console.log(a.length);

//number to string
a=String(a*a);


console.log(a);
console.log(typeof a);
console.log(a.length);

//boolean to String
a=String(true);
let b=(false).toString();

console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b);
console.log(a.length);
console.log(b.length);



//date to String
a=String(new Date());

console.log(a);
console.log(typeof a);
console.log(a.length);

//array to String
a=String([1,2,3,4]);

console.log(a);
console.log(typeof a);
console.log(a.length);


//string to number
a=Number('10');
console.log(a);
console.log(typeof a);
console.log(a.toFixed(2));//2 is for decimal position

//boolean to number
a=Number(false);//false=0,true=1
b=Number(null);//null=0
let c=Number('Hello');//NaN,for array also it will give NaN
console.log(a);
console.log(a);
console.log(c);
console.log(typeof a);
console.log(a.toFixed(2));//2 is for decimal position
console.log(parseInt('100.01001'));//100
console.log(parseFloat('100.01001'));
//
