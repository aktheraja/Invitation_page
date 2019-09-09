import React from 'react';
import {Modal} from "react-bootstrap";
const ModalComplete =(props) =>{

    return (
        <div className="container">
            <Modal show={props.shows} onHide={props.handleCloses}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank you</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Thank you for accepting to come</h5>
                </Modal.Body>
            </Modal>

        </div>
    );
};
export default ModalComplete;