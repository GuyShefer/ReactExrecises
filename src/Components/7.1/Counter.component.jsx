import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    increaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {

        
        return (
            <div>
                <button onClick={this.increaseCounter}>Increament</button>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}

export default Counter;