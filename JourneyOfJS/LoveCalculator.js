let personOne="priyobrato";
let personTwo="priydlsakk";

function calLove(personOne,personTwo){
  let val=0;
  if(personOne.length>personTwo.length){
  val=Math.random()*(personOne.length/(personTwo.length+personOne.length))*100;
  }
  else if(personTwo.length>personOne.length){
  val=Math.random()*(personTwo.length/(personTwo.length+personOne.length))*100;
  }
  else{
    val=Math.random()*100;
  }
  return "calculated value= "+(Math.floor(val))+"%";
}

console.log(calLove(personOne,personTwo));
