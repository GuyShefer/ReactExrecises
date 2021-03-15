import React from 'react';
import { render } from 'react-dom';
import './HideNSeek.css';

const FuncHideNSeek = () => {

    const [state, setState] = React.useState({ display: 'block' })

    const showAndHideBox = () => {
        console.log(state);
        setState(state.display === 'block' ?
            { display: state.display = 'none' } :
            { display: state.display = 'block' })
    }

    const style = {
        display: state.display
    }

    return (
        <div className="box">
            <button onClick={showAndHideBox}>show/hide</button>
            <div className="magic-box" style={style}></div>
        </div>
    )

}

export default FuncHideNSeek;