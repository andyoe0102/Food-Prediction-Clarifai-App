import React from 'react';
import FoodItem from './FoodItem.jsx';


const FoodList =(props)=>{
  if(props.foodLists.length === 0){
    return null
  }else{
    return(
      <div className="food-list">
        {props.foodLists.map((food,idx)=>{
          return <FoodItem food={food} key={idx}/>
        })}
      </div>
    )
  }
};

export default FoodList;