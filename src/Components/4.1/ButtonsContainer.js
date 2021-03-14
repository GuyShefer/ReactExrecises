import React from 'react';
import Button from '../4.1/Button'

const importantStyle = {fontWeight: 'bold', marginRight: '20px'}

class ButtonsContainer extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <Button name="Important" style={importantStyle} />
                <Button name="Not Important" />
            </div>


        )
    }

}


export default ButtonsContainer;