import React from 'react';
import classes from './Product.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({product,AddtoCard}) => {
    const{img,name,price}=product
    return (
        <div className={classes.container}>
            <img className={classes.images} src={img} alt="Not A Found" />
            <div>
                <h3>Names: {name}</h3>
                <p>Prices: ${price}</p>
              
            </div>
            <div>
                <button onClick={()=>AddtoCard(product)} className={classes.buttonCard}>Add to Card
                <span className={classes.ShopingCard}><FontAwesomeIcon icon= {faShoppingCart} /></span>  
                </button>
            </div>
           
        </div>
    );
};

export default Product;