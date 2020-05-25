import React from 'react';

const FoodItem = (props) =>{
  console.log(props.food,'fooditem');

  return(
    <div className='FoodItem'>
      <img className = "fooditem-image" src = {props.food.url}/>
      <h1 className="fooditem-name">{props.food.name}</h1>
    </div>
  )

}

export default FoodItem;