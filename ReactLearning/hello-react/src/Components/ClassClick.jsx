import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
      console.log('clicked from Class component')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Class</button>
            </div>
        )
    }
}

export default ClassClick
