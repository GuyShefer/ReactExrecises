import React from 'react';



class Card extends React.Component {
    render(){
        return (
            <div className="ui-card" style={{ width: '300px', height: '400px', border: '1px solid', margin: '40px' }}>
                <div className="image" style={{ width: '300px', height: '250px', border: '1px solid' }}>
                    <img src={this.props.imgsrc}></img>
                </div>
                <h1>{this.props.h1}</h1>
                <p>{this.props.p}</p>
                <div className="ui-buttons">
                    <a href="google.com" style={{ marginRight: '20px' }}>SHARE</a>
                    <a href="tesla.com">EXPLORE</a>
                </div>
            </div>
        )
    }
}



export default Card;