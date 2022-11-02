import React from 'react';
import Modal from 'react-bootstrap/Modal';
import '../main-page/main-page.css'

export const CustomModal = (props) => {

    const { show, id, toggleShow, resources } = props
    var date = new Date(resources[id]?.date);
    var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var formattedDate = monthNames[date.getMonth()] + ' de ' + date.getFullYear();

    return (
        <>
            <Modal dialogClassName='my-modal' show={show} onHide={toggleShow} centered>
                <Modal.Header>
                    <Modal.Title>{resources[id]?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Dialog style={{ fontSize: '1.4em' }}>{formattedDate}</Modal.Dialog>
                <Modal.Body>
                    {resources[id]?.description}
                </Modal.Body>
                <Modal.Footer>{resources[id]?.keywords.join(', ').toString()}</Modal.Footer>
            </Modal>
        </>
    );
}