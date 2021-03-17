import React from 'react';
import { CustomButton } from './CustomButton';

const colors = ['blue', 'red', 'yellow'];

export class Parent extends React.Component {
    state = { color: '' };

    showColor = (e) => {
        this.setState({color: e})
    }

    render() {
        return (
            <>
            {
                colors.map(color => {
                    return <CustomButton color={color} onClickEvent={this.showColor}/>
                })
            }

            <h2>The Color Selected is : {this.state.color}</h2>
            </>
        )
    }

}

