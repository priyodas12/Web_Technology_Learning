import React from 'react'

const FunctionClick = () => {

    function clickHandler(){
      console.log("button clicked")
    }

    return (
        <div>
        {/*do not add () in function call,hence it will be a function call for 1st time when this page will be loaded*/}
          <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick;
