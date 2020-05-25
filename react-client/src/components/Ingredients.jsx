import React from 'react';


const Ingredients = (props) => {

  if(!props.ingredients){
    return null;
  }
  return(
  <div className='ingredients'>
    <h1 className="food-heading">Predicted Ingredients</h1>

  <div className="prediction"><p>{props.ingredients}</p></div>
  </div>
)}

export default Ingredients;