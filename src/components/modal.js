import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { projects } from '../structure/projects.json'
import '../main-page/main-page.css'

export const CustomModal = (props) => {

    const { show, id, toggleShow } = props
    var date = new Date(projects[id]?.date);
    var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var formattedDate = monthNames[date.getMonth()] + ' de ' + date.getFullYear();
    
    return (
        <>
            <Modal dialogClassName='my-modal' show={show} onHide={toggleShow} centered>
                <Modal.Header>
                    <Modal.Title>{projects[id]?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Dialog style={{fontSize: '1.4em'}}>{formattedDate}</Modal.Dialog>
                <Modal.Body>{projects[id]?.description}</Modal.Body>
                <Modal.Footer>{projects[id]?.keywords.join(', ').toString()}</Modal.Footer>
            </Modal>
        </>
    );
}