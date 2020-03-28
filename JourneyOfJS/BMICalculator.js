
let weight=70;//in kg
let height=1.8//in meter

function calBMI(weight,height){
  return weight/Math.pow(height,2);
}
console.log(calBMI(weight,height));
