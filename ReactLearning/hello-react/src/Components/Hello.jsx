import React from 'react';

 export const Hello=()=>{
  //return <h1>Hello Priya</h1>
  return React.createElement(
    'div',
    {id:'test1',className:'testClass1'},
    React.createElement('h1',
                        {id:'test2',className:'testClass2'},
                        'Hello Priya'
                          ));
}
