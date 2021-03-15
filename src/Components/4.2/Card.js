import React from 'react';

const Card = (props) => {

    console.log(props.h1);
    return (
        <div className="ui-card" style={{ width: '300px', height: '400px', border: '1px solid', margin: '40px' }}>
            <div className="image" style={{ width: '300px', height: '250px', border: '1px solid' }}>
                <img src={props.imgsrc}></img>
            </div>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
            <div className="ui-buttons">
                <a href="google.com" style={{ marginRight: '20px' }}>SHARE</a>
                <a href="tesla.com">EXPLORE</a>
            </div>
        </div>
    )

}



export default Card;