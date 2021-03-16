import React from 'react';
import './Spinner.css'

export class Spinner extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <>
            <div className='spinner-div'>
                <div className="spinner"></div>
            </div>
        </>
    }



}