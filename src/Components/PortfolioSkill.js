import React from 'react';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'


const PortfolioSkill = (props) => {
    return (

        <Card classname="skill">
        <Accordion.Toggle as={Button} eventKey={props.skillId}>
        {props.title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.skillId}>
            <Card.Body>
            {props.content}
            </Card.Body>
        </Accordion.Collapse>
        </Card>
    )
}
   
export default PortfolioSkill;   