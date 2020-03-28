const admi={
  name:'xyz',
  age:39,
  vehicle:['cycle','bike'],
  skill:{
    frontend:'js',
    backend:['java','python'],
    database:['mongodb','aurora']
  },
  timeNow:()=>{
    return new Date();
  },
  getDOB:function(){
    return 2020-this.age;
  }
}
let val;
val=admi.name;
val=admi.skill;
val=admi.timeNow();
val=admi.getDOB();
console.log(val)
