import React from 'react';
import './continuousText.css'

const ContinuousText = (props) => {
    return (
        <div className="wrapper">
            <div className="marquee" style={{animationDirection: props.direction}}>
                <p>{props.text}</p>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default ContinuousText;