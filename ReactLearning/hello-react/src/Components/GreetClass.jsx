import React,{ Component } from 'react';

class Welcome extends Component{
  render(){
    const {name,surname}=this.props;
    return (
      <div>
        <h1>Welcome {name} {surname}</h1>
        <h5>{this.props.children}</h5>
      </div>
    );
  }
}

export default Welcome;
