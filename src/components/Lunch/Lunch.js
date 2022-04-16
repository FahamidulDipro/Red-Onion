 
import { Button, Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
 

const Lunch = ({ lunch }) => {
  const { name, picture, price } = lunch;

  return (
    <Col lg={4} className="mt-5 ">
      <NavLink to='/detail' className={'text-decoration-none text-dark '}>
      <Card style={{ width: "18rem" }} className='shadow-lg border-0'>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{lunch.name}</Card.Title>
          <Card.Text></Card.Text>
           <p>
            <b>Price: </b>
            {price}
          </p>
        </Card.Body>
      </Card>
      </NavLink>
    
    </Col>
  );
};

export default Lunch;
