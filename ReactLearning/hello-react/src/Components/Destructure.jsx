import React from 'react'

const Greet = (props) => {
    const {name,surname}=props;
    return (
        <div>
            <h3>Hello, {name} ,{surname}</h3>
        </div>
    )
}

export default Greet
