import React from 'react';
import './Random.css'
const Random = ({ChooseFor}) => {
    const {name,img}=ChooseFor
    return (
        <div className='setcontainer'>
            <h3>CHOOSE Item</h3>
            <div  className='container'>
                <p><img className='images' src={img} alt=""/></p>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Random;