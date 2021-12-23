import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import './image.css'

export const LinkableImage = (props) => {
    return (
        <div className='full-height-img' style={{ backgroundImage: 'url(' + props.url + ')' }}>
            <div className='linked-icon'>
                <FontAwesomeIcon icon={solidIcons.faSquareFull} size='2x' />
                <FontAwesomeIcon icon={solidIcons.faChevronRight} style={{color: '#ffffff', marginLeft: '-30px', marginBottom: '10px'}}/>
                <p>
                    <br></br>
                    Consultar
                </p>
                <p>{props.page}</p>
            </div>
        </div>
    );
}