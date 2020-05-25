import React from 'react';

const FoodItem = (props) =>{
  return(
    <div onClick={()=>{props.changeData(props.food)}}className='FoodItem'>
      <img className = "fooditem-image" src = {props.food.url}/>
      <div className="fooditem-info">
          <h1 className ="fooditem-name">{props.food.name}</h1>
          <p className="fooditem-ingredients">{props.food.ingredients}</p>
      </div>
    </div>
  )

}

export default FoodItem;