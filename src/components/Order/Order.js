import React from 'react';

import classes from './Order.css';

const order = (props) => {
    const ingredients = Object.keys(props.ingredients).map(key => {
        return <p key={key}>{key}: {props.ingredients[key]}</p>
    })
    return (
        <div className={classes.Order}>
            <h4>Order ID:{props.id} </h4>
            {ingredients}
        </div>
    )
}

export default order;