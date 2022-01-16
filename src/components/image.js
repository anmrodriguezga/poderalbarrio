import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import { sites } from '../alliances.json'
import './image.css'

export const LinkableImage = (props) => {
    return (
        <div className='full-height-img' style={{ backgroundImage: 'url(' + props.image + ')' }}>
            <div className='linked-icon'>
                <Link to={props.url} className='no-style-link'>
                    {/* <FontAwesomeIcon icon={solidIcons.faSquareFull} size='2x' />
                    <FontAwesomeIcon icon={solidIcons.faChevronRight} style={{ color: '#ffffff', marginLeft: '-30px', marginBottom: '10px' }} /> */}
                    <RouterIcon />
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
                    <DownloadIcon
                        buttonColor={buttonColor}
                        arrowColor={arrowColor}
                    />
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

const DownloadIcon = (props) => {
    return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill={props.buttonColor} />
            <g transform="translate(12.5,12.5)">
                <path d="M4.6665 7.11108L12.1559 15.6666L19.3332 7.11108" stroke={props.arrowColor} strokeWidth="2" strokeLinecap="square" />
                <path d="M12 13.2222V1" stroke={props.arrowColor} strokeWidth="2" strokeLinecap="square" />
                <path d="M1 21.7778H23" stroke={props.arrowColor} strokeWidth="2" strokeLinecap="square" />
            </g>
        </svg>
    )
}

const RouterIcon = () => {
    return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#463950" />
            <g transform="translate(20,15)">
                <path d="M2 20L13 10.8085L2 2" stroke="white" strokeWidth="2" strokeLinecap="square" />
            </g>
        </svg>
    )
}