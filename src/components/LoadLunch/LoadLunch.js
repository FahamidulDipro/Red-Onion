import React, { useContext } from 'react';
import { FoodLoad } from '../../App';
import Lunch from '../Lunch/Lunch';

const LoadLunch = () => {
    const Foods = useContext(FoodLoad);
    const [breakfasts,lunches,dinners] = Foods;
    return (
        <div>
              {
                lunches.map(lunch=><Lunch key={lunch.id} lunch={lunch}></Lunch>)
                 
            }
            {
                console.log(Foods)
            }
        </div>
    );
};

export default LoadLunch;