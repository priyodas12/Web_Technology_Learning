import React from "react";

const Greet=({name,surname})=>{
  return <h1>Hello {name} {surname}</h1>
}
//below is named export where we have use the same name in app.js
// export const Greet=()=>{
//   return <h1>Hello Priyo</h1>
// }

export default Greet;
