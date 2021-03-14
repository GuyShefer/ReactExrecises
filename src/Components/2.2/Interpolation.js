import React from 'react';
import ReactDOM from 'react-dom'

const data = ["hello", "world"];
const number1 = 5;
const number2 = 6;;
const string = 'I love React!';

class Interpolation extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return <div>
            {data.join(' ')}
            <br></br>
            {number1} + {number2} = {number1 + number2}
            <br></br>
            The string’s length is {string.length}
        </div>
    }
}

export default Interpolation;