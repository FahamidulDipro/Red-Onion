import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
 

const Dinner = ({ dinner }) => {
  const { id,name, picture, price } = dinner;
  const navigate = useNavigate();
    const showId = id=>{
      navigate(`/detail/${id}`);
    }
  return (
    <Col lg={4} className="mt-5 ">
      
      <Card style={{ width: "18rem" }} className='shadow-lg border-0' onClick={()=>showId(id)}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{dinner.name}</Card.Title>
          <Card.Text></Card.Text>
          <p>
            <b>Price: </b>
            {price}
          </p>
         
        </Card.Body>
      </Card>
 
     
    </Col>
  );
};

export default Dinner;
