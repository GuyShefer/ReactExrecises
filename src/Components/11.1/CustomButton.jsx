import React from 'react';
import './CustomBtn.css';

export class CustomButton extends React.Component {
    state = {color: this.props.color}

    onClickColor = (e) => {
        this.props.onClickEvent(this.state.color);
    }

    render() {
        return (
            <>
                <input type="button" className="color-btn" onClick={this.onClickColor} value={this.state.color} style={{background: this.state.color}}></input>
            </>
        )
    }

}
