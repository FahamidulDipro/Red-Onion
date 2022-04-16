import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const BreakFast = ({breakfast}) => {
    const {name,detail,price,picture} = breakfast;
    return (
      <Col lg={4} className='mt-5'>
        <NavLink to='/detail' className={'text-decoration-none text-dark'}>
        <Card style={{ width: '18rem' }} className='shadow-lg border-0'>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {detail}
          
          </Card.Text>
          <p><b>Price: </b>{price}</p>
         
        </Card.Body>
      </Card>
        </NavLink>
        
      </Col>
    );
};

export default BreakFast;