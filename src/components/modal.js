import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { TikTok } from "react-tiktok";
import '../main-page/main-page.css'

export const CustomModal = (props) => {

    const { show, id, toggleShow, resources } = props
    var date = new Date(resources[id]?.date);
    var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var formattedDate = monthNames[date.getMonth()] + ' de ' + date.getFullYear();

    let youTubeVideo = resources[id]?.url?.includes('youtube') ?
        <iframe width="100%" height="375" src={resources[id].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        : null;

    let pdfFile = resources[id]?.url?.includes('.pdf') ?
        <embed width="100%" height= "375" src={resources[id].url} type="application/pdf"></embed>
        : null;

    let tikTok = resources[id]?.url?.includes('tiktok') ?
        <TikTok width="100%" height= "375" url={resources[id].url} />
        : null;

    return (
        <>
            <Modal dialogClassName='my-modal' show={show} onHide={toggleShow} centered>
                <Modal.Header>
                    <Modal.Title>{resources[id]?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Dialog style={{ fontSize: '1.4em' }}>{formattedDate}</Modal.Dialog>
                <Modal.Body>
                    {resources[id]?.description}
                    <br></br><br></br>
                    { youTubeVideo }
                    { pdfFile }
                    { tikTok }
                </Modal.Body>
                <Modal.Footer>{resources[id]?.keywords.join(', ').toString()}</Modal.Footer>
            </Modal>
        </>
    );
}