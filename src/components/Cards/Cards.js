import React, {  } from 'react';
import Card from '../Card/Card';
import classes from './Cards.module.css'

const Cards = ({card}) => {
    // const [ChooseFor, setChooseForme]=useState({})
    // const ChooseForme =(cards)=>{
    //     let item =cards[Math.floor(Math.random()*cards.length)]
    //     setChooseForme(item)
    // }
    // const rest =()=>{
    //     setChooseForme([])
    // }
    return (
        <div className={classes.container}>
            <h1>Selected Clothes</h1>
           {
                card.map(cards=><Card
                key={cards.id}
                cards={cards}
                // ChooseFor={ChooseFor}
                ></Card>)  
            }
            {/* onClick={()=>ChooseForme(card)} */}
            <button  className={classes.Choose}>CHOOSE 1 FOR ME</button>
            <button className={classes.Choose}>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cards;