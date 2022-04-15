import React, { useContext } from 'react';
import { FoodLoad } from '../../../App';
import Dinner from '../Dinner';

const LoadDinner = () => {
    const [breakfasts,lunches,dinners] = useContext(FoodLoad);

    return (
        <div>
           {
               dinners.map(dinner=><Dinner key={dinner.id} dinner={dinner}></Dinner>)
           } 
        </div>
    );
};

export default LoadDinner;