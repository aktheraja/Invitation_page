import React from 'react';
import {Button,Modal} from "react-bootstrap";
const Modals =(props) =>{

        return (
            <div className="container">
                <Modal show={props.show} onHide={props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Details of Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Date: 05 Oct, 2019</h5>
                        <h5>Time: 2pm</h5>
                        <h5>Venue: Programming Room Yorkton Library</h5>
                        <h5>Dress Code: White on blue Jeans</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        {/*<Button variant="secondary" onClick={props.handleClose}>*/}
                        {/*    Close*/}
                        {/*</Button>*/}
                        <Button variant="primary" onClick={props.handleClose}>
                            Continue
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    };
export default Modals;