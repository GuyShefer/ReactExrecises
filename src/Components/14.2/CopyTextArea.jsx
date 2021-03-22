import React from 'react'

export class CopyTextArea extends React.Component {
    state = {}

    copyTextArea = () => {
        this.textArea.select();
        document.execCommand('copy');
    }

    render() {
        return <>
            <textarea type="text" placeholder="some text" ref={(textarea) => this.textArea = textarea} />
            <input type="button" value="copy" onClick={this.copyTextArea} />
        </>
    }
}