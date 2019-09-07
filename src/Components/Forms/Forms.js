import React from 'react';
import {Form,Button} from "react-bootstrap";
import classes from './Forms.css';
const form = (props)=>{
    return(
        <div className="container">
            <Form className={classes.spaces}>
                <h2>Please indicate if you are attending</h2>
                <Form.Group controlId="validationCustomUsername">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" onChange={props.firstname}/>
                    <Form.Text className="text-muted">
                        We'll never share your Name with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="validationCustomUsername">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" onChange={props.lastname}/>
                </Form.Group>
                <Button variant="primary" type="submit" className="btn btn-default btn-lg" onClick={props.clicked}>
                    Yes
                </Button>
                <Button variant="danger" type="submit" className="btn btn-default btn-lg">
                    No
                </Button>
            </Form>
        </div>
    );
};
export default form;