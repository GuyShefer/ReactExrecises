import React from 'react';

export class CheckBoxes extends React.Component {
    state = {1: false, 2: false, 3: true, 4: true}

    changeCheckedBox = (e) => {
        console.log(e.target.checked);
    }

    render() {
        console.log(Object.keys(this.state).length);
        return (
            <>
            {
                Object.values(this.state).map( value => {
                    return <input type="checkBox" defaultChecked={value} onChange={this.changeCheckedBox}/>
                })
            }

            </>
        )
    }
    
}