let numbers=[2,3,4,6,"j"];

let [a,,b,c]=numbers;
let [j='default',...k]=numbers;
console.log(j+":"+k);
console.log(a+","+b+","+c);


let aa=20;
let bb=21;

[bb,aa]=[aa,bb];

console.log(aa+";;"+bb)
