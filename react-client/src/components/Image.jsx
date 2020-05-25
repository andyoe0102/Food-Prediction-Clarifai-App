import React from 'react';


const Image = (props) => {
  if(!props.image){
    return null
  }else{
    return (
      <div className='image'>
        <img className="food-image" src = {props.image}/>
      </div>
    )
  }
}


export default Image;