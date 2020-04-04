import React from 'react'

const FunctionClick = () => {

    function clickHandler(){
      console.log("clicked from function component")
    }

    return (
        <div>
        {/*do not add () in function call,hence it will be a function call for 1st time when this page will be loaded*/}
          <button onClick={clickHandler}>Click Function</button>
        </div>
    )
}

export default FunctionClick;
