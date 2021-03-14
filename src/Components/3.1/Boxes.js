import React from 'react';
const box1Style = { background: 'green', width: '400px', height: '200px' }
const box2Style = {
    background: 'blue',
    width: '350px',
    height: '150px',
    position: 'absolute',
    top: '25px',
    left: '20px',
}
const box3Style = {
    background: 'pink',
    width: '320px',
    height: '120px',
    position: 'absolute',
    top: '15px',
    left: '15px',
}
const box4Style = {
    background: 'purple',
    width: '280px',
    height: '40px',
    position: 'absolute',
    top: '15px',
    left: '20px',
}

class Boxes extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return <div style={box1Style}>
            <div style={box2Style}>
                <div style={box3Style}>
                    <div style={box4Style}></div>
                    <div style={{
                        background: 'purple',
                        width: '280px',
                        height: '40px',
                        position: 'absolute',
                        top: '65px',
                        left: '20px',
                    }}></div>
                </div>
            </div>
        </div>
    }

}

export default Boxes;