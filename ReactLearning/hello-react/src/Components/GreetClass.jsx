import React,{ Component } from 'react';

class Welcome extends Component{
  render(props){
    return (
      <div>
        <h1>Welcome {this.props.name}</h1>
        <h5>{this.props.children}</h5>
      </div>
    );
  }
}

export default Welcome;
