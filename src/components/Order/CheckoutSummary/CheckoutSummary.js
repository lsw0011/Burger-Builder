import React from 'react';

import Burger from '../../Burger/Burger';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes good!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <button onClick={props.cancel}>Cancel</button>
            <button onClick={() => props.continue()}>Continue</button>
        </div>
    )
}

export default checkoutSummary;