import React from 'react'

export class Focus extends React.Component {

    componentDidMount() {
        if (this.textInput) {
            this.textInput.focus();
        }
    }

    render() {
        return <>
            <input type="text" placeholder="some text" ref={input => { this.textInput = input }} />

        </>
    }
}