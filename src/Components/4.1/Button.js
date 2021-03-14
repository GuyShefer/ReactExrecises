import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super();
    }

    render(){
        console.log(this.props);
        return <button style={this.props.style}>{this.props.name}</button>
    }
} 



export default Button;