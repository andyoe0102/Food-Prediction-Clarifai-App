import React from 'react';

const FoodItem = (props) =>{
  return(
    <div onClick={()=>{props.changeData(props.food)}}className='FoodItem'>
      <img className = "fooditem-image" src = {props.food.url}/>
      <h1 className="fooditem-name">{props.food.name}</h1>
    </div>
  )

}

export default FoodItem;