import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    const ingredients = [];
    Object.keys(props.ingredients).forEach((key)=>{
        for(var i = 0; i < props.ingredients[key]; i++){
            ingredients.push(<BurgerIngredient key={key + i} type={key} />)
        }
    })
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'} />
                {ingredients}
            <BurgerIngredient type={'bread-bottom'} />
        </div>
    )
}

export default burger;