import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FoodLoad } from '../../App';

const Detail = () => {
    const foodId = useParams();
    const Foods = useContext(FoodLoad);
    let foodDetail;
    for(const foods of Foods){
        //  foodDetail = foods.find(food=>food.id===foodId);
        foodDetail = foods;
     

    }
   

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