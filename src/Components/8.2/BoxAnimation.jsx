import React from 'react';
import './Box.css'

export class BoxAnimation extends React.Component {
    state = {size: 0};

    componentDidMount() {
        const boxes = document.querySelectorAll('.box');
        console.log(boxes)
        setTimeout(() => {
            boxes.forEach(box => box.classList.add('style'));
        }, 1000);
        setTimeout(() => {
            boxes.forEach(box => box.classList.remove('style'));
        }, 4000);
    }


    render() {
        console.log(this.props.size);
        return (
            <div className="box" style={{width: this.props.size, height: this.props.size}}></div>
        )
    }



}