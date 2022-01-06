import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { sites } from '../alliances.json'
import './image.css'

export const LinkableImage = (props) => {
    return (
        <div className='full-height-img' style={{ backgroundImage: 'url(' + props.image + ')' }}>
            <div className='linked-icon'>
                <Link to={props.url} className='no-style-link'>
                    <FontAwesomeIcon icon={solidIcons.faSquareFull} size='2x' />
                    <FontAwesomeIcon icon={solidIcons.faChevronRight} style={{ color: '#ffffff', marginLeft: '-30px', marginBottom: '10px' }} />
                    <p>
                        <br></br>
                        Consultar
                    </p>
                    <p>{props.page}</p>
                </Link>
            </div>
        </div>
    );
}

export const DownloadableImage = (props) => {
    var buttonColor = props.inverted ? '#ffffff' : '#463950';
    var arrowColor = props.inverted ? '#463950' : '#ffffff';
    return (
        <div className='full-img' style={{ backgroundImage: 'url(' + props.image + ')' }}>
            <div className='linked-icon'>
                <a href={props.publicationLink} download className='no-style-link'>
                    <FontAwesomeIcon icon={solidIcons.faSquareFull} size='2x' style={{ color: buttonColor }} />
                    <FontAwesomeIcon icon={solidIcons.faArrowDown} style={{ color: arrowColor, marginLeft: '-34px', marginBottom: '8px' }} />
                    <p style={{ color: buttonColor }} className='hidden-text'>
                        <br></br>
                        Descargar
                    </p>
                </a>
            </div>
        </div>
    );
}

export const ImageMatrix = (props) => {
    var baseUrl = '/assets/thumbnails';
    var data = [];
    var context = require.context("../../public/assets/thumbnails", false, /\.(png|jpe?g|svg)$/);
    context.keys().forEach((filename) => {
        var result = baseUrl + filename.substring(1);
        if (result.includes(props.imageType)) {
            data.push(result);
        }
    });

    while (data.length < props.frames) data.push('/assets/thumbnail.jpg');

    const listImgs = data.map((d, index) => {
        var url = props.linkable ? sites[index]?.site.url : null;
        return (
            <Col key={index} className='thumbnail'>
                <a href={url}>
                    <Image className='thumbnail-img' alt='thumbnail' src={d} />
                </a>
            </Col>
        );
    });

    return (
        <Row className='g-0 justify-content-center'
            xs={props.size}
            sm={props.size}
            md={props.size}
            lg={props.size}
            xl={props.size}
        >
            <div className='matrix-title'>
                {props.title}
            </div>
            <div className='matrix-subtitle'>
                {props.subtitle}
            </div>

            {listImgs}

        </Row>
    );
}