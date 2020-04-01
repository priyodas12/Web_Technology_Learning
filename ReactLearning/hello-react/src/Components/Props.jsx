import React from 'react'

export const Demo=(props)=>{
  return (
    <div>
        <h3>Hello {props.city} ,today's temperature: {props.temp}'C </h3>
        <h4>Pincode:{props.children}</h4>
    </div>
  );
}
