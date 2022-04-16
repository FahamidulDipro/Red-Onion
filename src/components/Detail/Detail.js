import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FoodLoad } from '../../App';

const Detail = () => {
    const {foodId} = useParams();
   
    const foods = useContext(FoodLoad);
    const {breakfasts,lunchs,dinners} = foods;
    const allFoods = [...breakfasts,...lunchs,...dinners];
    const foodDetail = allFoods.find(food=>food.id === foodId);
    const {name,price,picture} = foodDetail;
  

    return (
        <div>
            <h1 className='mt-5'>This is detail</h1>
            {
                console.log(foodDetail)
            }
        </div>
    );
};

export default Detail;