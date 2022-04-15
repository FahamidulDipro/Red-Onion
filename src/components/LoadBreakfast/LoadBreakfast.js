import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { FoodLoad } from '../../App';
import BreakFast from '../BreakFast/BreakFast';

const LoadBreakfast = () => {
  const Foods = useContext(FoodLoad);
  const [breakfasts,lunches,dinners] = Foods;
    return (
        <div>
            <Container fluid>
                <Row className='container'>
            { 
                breakfasts.map(breakfast=><BreakFast key={breakfast.id} breakfast={breakfast}></BreakFast>)
            }
            </Row>
            </Container>
        </div>
    );
};

export default LoadBreakfast;