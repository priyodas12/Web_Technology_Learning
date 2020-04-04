import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message:'hello',
            name:''
        }
        this.clickHandler=this.clickHandler.bind(this);
    }
    clickHandler(){
      this.setState({
        message:`hi`,
        name:'priyo'
      })
    }



    render() {
        return (
            <div>
                <p>{this.state.message} {this.state.name}</p>
                {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
