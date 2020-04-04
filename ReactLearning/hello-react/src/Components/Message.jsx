import React, { Component } from 'react';

class Message extends Component{

  constructor () {
    super();
    this.state={
      message:"Hello Visitor"
    }
  };

  subscribeMe(){
    this.setState({
      message:"Thanks for Subscribing!"
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.subscribeMe()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
