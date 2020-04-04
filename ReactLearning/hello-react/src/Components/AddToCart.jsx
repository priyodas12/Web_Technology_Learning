import React, { Component } from 'react'

class AddToCart extends Component {
  constructor(props) {
      super(props)

      this.state = {
         count:0
      }
  }

  increaseProduct(){
    this.setState({
        count:this.state.count+1
    })
  }

  decreaseProduct(){
    this.setState({
        count:this.state.count>0?this.state.count-1:0
    })
  }

  resetProduct(){
    this.setState({
        count:0
    })
  }

    render() {
        return (
            <div>
              <p>Add to Cart:{this.state.count}</p>
              <button onClick={()=>this.increaseProduct()}>+</button>
              <button onClick={()=>this.resetProduct()}>Reset</button>
              <button onClick={()=>this.decreaseProduct()}>-</button>
            </div>
        )
    }
}

export default AddToCart;
