import React,{ Component } from 'react';

class Welcome extends Component{
  render(){
    const {name,surname}=this.props;
    return (
      <div>
        <h1>Welcome {name} {surname} </h1>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}

export default Welcome;
