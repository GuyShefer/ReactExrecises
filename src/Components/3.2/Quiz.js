import React from 'react'
import QTitle from './QTitle'
import Q1 from './Q1'
import Q2 from './Q2'

class Quiz extends React.Component {
    constructor(props) {
        super();
    }

    render(){
        return <div style={{width: '400px', height: '250px', border: '3px solid black'}}>
            <QTitle/>
            <Q1/>
            <Q2/>
        </div>
         // have to fill with quiz title Q1 Q2
        
    }
}

export default Quiz;