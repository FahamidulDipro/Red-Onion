import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const BreakFast = ({breakfast}) => {
    const {name,detail,price,picture} = breakfast;
    return (
      <Col lg={4} className='mt-5'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {detail}
          
          </Card.Text>
          <p><b>Price: </b>{price}</p>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>
    );
};

export default BreakFast;