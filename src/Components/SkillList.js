import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


const SkillList = (props) => {
    return (
        <ListGroup className="skills">
        <ListGroup.Item variant="dark">{props.header}</ListGroup.Item>
        {props.skills.map(
            (skill) => 
                <ListGroup.Item >{skill}</ListGroup.Item>
            
        )}
        </ListGroup>
        )
}

export default SkillList