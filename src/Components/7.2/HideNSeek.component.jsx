import React from 'react';
import './HideNSeek.css';

class HideNSeek extends React.Component {
    constructor(props) {
        super(props);

        this.state = { display: 'block' }
    }

    showAndHideBox = () => {
        this.setState(this.state.display === 'block' ?
            { counter: this.state.display = 'none' } :
            { counter: this.state.display = 'block' })
    }

    render() {
        const style = {
            display: this.state.display
        }
        return (
            <div className="box">
                <button onClick={this.showAndHideBox}>show/hide</button>
                <div className="magic-box" style={style}></div>
            </div>
        )
    }

}

export default HideNSeek;