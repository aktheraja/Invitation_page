import React from 'react';
import {Jumbotron,Button} from  "react-bootstrap";
import classes from './Jumbotron.css';
const jumbotron =()=>{
    return(
        <div className="container " >
            <Jumbotron className={classes.jumbotron}>
                <h1>Dr. Charles Osime's Send Forth!</h1>
                    <Button variant="primary">Click here to Learn more</Button>
            </Jumbotron>
        </div>
    );
}
export default jumbotron;