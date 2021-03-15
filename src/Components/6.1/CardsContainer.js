import React from 'react';
import Card from '../6.1/Card'

const cards = [{h1:'first', p:'some text1'}, {h1:'second', p:'some text2'}, {h1:'third', p:'some text3'}];

class CardsContainer extends React.Component {


    render() {
        return (
            <div style={{display: 'flex'}}>

                {cards.map(card => {

                    return <Card h1={card.h1} p={card.p}/> 
                })}


            </div>


        )
    }

}


export default CardsContainer;