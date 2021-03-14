import React from 'react';
import Card from '../4.2/Card'
import img1 from './images/1.jpg'


class CardsContainer extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <Card h1="first" p="some text" />
                <Card h1="seoncd" p="some text" />
                <Card h1="third" p="some text" />
            </div>


        )
    }

}


export default CardsContainer;