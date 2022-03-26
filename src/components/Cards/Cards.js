import React, {useState} from 'react';
import Card from '../Card/Card';
import Random from '../Random';
import classes from './Cards.module.css'

const Cards = ({card}) => {
    const [ChooseFor, setChooseForme]=useState({})
    const ChooseForme =()=>{
        let rendom =Math.floor(Math.random()*card.length)
        setChooseForme(card[rendom])
    }
    return (
        <div className={classes.container}>
            <h1>Selected Clothes</h1>
           {
                card.map(cards=><Card
                key={cards.id}
                cards={cards}
                ></Card>)  
            }
            <button onClick={()=>ChooseForme(card)}  className={classes.Choose}>CHOOSE 1 FOR ME</button>
            <button className={classes.Choose}>CHOOSE AGAIN</button>
           <Random ChooseFor={ChooseFor}></Random>
        </div>
    );
};

export default Cards;