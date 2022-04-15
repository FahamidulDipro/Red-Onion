import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const BreakFast = (props) => {
    const {breakfast} = props;
    return (
      <Col lg={4} className='mt-5'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{breakfast.name}</Card.Title>
          <Card.Text>
            {breakfast.detail}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>
    );
};

export default BreakFast;