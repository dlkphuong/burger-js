import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients=Object.keys(props.ingredients).map(
        igKey =>{
            return [...Array(props.ingredients[igKey])].map((_,i)=>{ //mao((element,index)=>)
                return <BurgerIngredient key={igKey+i} type={igKey}/>; //igKey (cheese, bacon)..
            });
        }).reduce((arr,el)=>{
            return arr.concat(el)
        },[]);
    if (transformedIngredients.length==0){
        transformedIngredients=<p>Please start adding ingredients</p>;
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;