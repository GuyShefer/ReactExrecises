import React from 'react'

export class Focus extends React.Component {

    componentDidMount() {
        this.textInput.focus();
    }

    render() {
        return <>
            <input type="text" placeholder="some text" ref={input => { this.textInput = input }}/>
            
        </>
    }
}