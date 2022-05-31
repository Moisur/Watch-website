import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Product from '../Product/Product';
import classes from './Products.module.css'
const Products = () => {
    const AddtoCard =(product)=>{
        const addtoCard =[...Card,product]
        setCard(addtoCard)
    }
    
    const [Card,setCard]=useState([])
    const [products,setproducts]=useState([])
    if(Card.length >4 ){
        alert("Sorry fonr number alert")
    }
    useEffect(()=>{
        fetch('watch.json')
        .then(res=>res.json())
        .then(data =>setproducts(data))
    
    },[])
    const ChooseAgain =()=>{
        setCard([])
    }
    return (
        <main className={classes.container}>
            <div className={classes.products}>
                {
                  products.map(product =><Product
                  key={product.id}
                  AddtoCard={AddtoCard}
                  product={product}
                  ></Product>)  
                }
               
            </div>
            <div className={classes.card}>
                <Cards card={Card} ChooseAgain={ChooseAgain}></Cards>
            </div>
        </main>
    );
};

export default Products;