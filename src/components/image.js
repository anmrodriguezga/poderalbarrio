import React from 'react';
import './image.css'

export const LinkableImage = (props) => {
    return(
        <div className='full-height-img' style={{backgroundImage: 'url(' + props.url +')'}}>
            <p>Consultar</p>
            <p>{props.page}</p>
        </div>
    );
}