import React from 'react';

const FuncCounter = () => {

    const [state, setState] = React.useState({
        counter: 0
    })

    const increaseCounter = () => {
        setState({ counter: state.counter + 1 })
    }

    return (
        <div>
            <button onClick={increaseCounter}>Increament</button>
            <p>{state.counter}</p>
        </div>
    )
}

export default FuncCounter;