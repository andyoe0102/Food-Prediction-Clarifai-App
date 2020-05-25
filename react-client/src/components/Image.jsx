import React from 'react';


const Image = (props) => (
  <div className='image'>
    <img className="food-image" src = {props.image}/>
  </div>
)

export default Image;