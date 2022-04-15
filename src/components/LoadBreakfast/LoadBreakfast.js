import React, { useContext, useEffect, useState } from 'react';
import { FoodLoad } from '../../App';
import BreakFast from '../BreakFast/BreakFast';

const LoadBreakfast = () => {
  const Foods = useContext(FoodLoad);
  const [breakfasts] = Foods;
    return (
        <div>
            { 
                breakfasts.map(breakfast=><BreakFast key={breakfast.id} breakfast={breakfast}></BreakFast>)
            }
        </div>
    );
};

export default LoadBreakfast;