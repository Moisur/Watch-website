import React, {} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import classes from './Card.module.css'
const Card = ({cards}) => {
    const {img,name}=cards
    return (
        <div className ={classes.container}>
            <img className={classes.images} src={img} alt="" />
            <p>{name.slice(0,22)}</p>
            <button><FontAwesomeIcon icon= {faDeleteLeft} /></button>
        </div>
    );
};

export default Card;