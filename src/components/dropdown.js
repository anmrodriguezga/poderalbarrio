import React from 'react';
import { Button, ButtonGroup, Dropdown, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { useRef } from 'react';
import './dropdown.css';

export const TextDropdown = (props) => {
    return (
        <Dropdown as={ButtonGroup}>
            <Button className='drop-title btn btn-secondary'>{props.placeholder}</Button>
            <Dropdown.Toggle split className='btn btn-success'>
                <FontAwesomeIcon icon={solidIcons.faChevronDown} size='2x' style={{ color: '#ffffff' }} />
            </Dropdown.Toggle>

            <Dropdown.Menu className='drop-menu'>
                <Dropdown.Item eventKey="1">Audio y Video</Dropdown.Item>
                <Dropdown.Item eventKey="2">Diseño</Dropdown.Item>
                <Dropdown.Item eventKey="3">Gerencia</Dropdown.Item>
                <Dropdown.Item eventKey="4">Marca Barrio</Dropdown.Item>
                <Dropdown.Item eventKey="5">Poblaciones</Dropdown.Item>
                <Dropdown.Item eventKey="6">Programa Juvenil</Dropdown.Item>
                <Dropdown.Item eventKey="7">Diseño Web</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export const AppDatePicker = () => {
    const ref = useRef();
    return (
        <Form.Control
            className='btn-secondary app-date-picker'
            style={{cursor: 'pointer'}}
            ref={ref}
            onChange={(e) => console.log(e.target.value)}
            onMouseOver={() => (ref.current.type = "date")}
            onMouseLeave={() => (ref.current.type = "text")}
            placeholder="fecha"
        />
    );
}