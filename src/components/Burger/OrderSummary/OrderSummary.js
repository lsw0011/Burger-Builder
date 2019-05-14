import React, { Component } from 'react';

import Aux from '../../../hoc/Aux'

class OrderSummary extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.display){
            return true;
        }else{
            return false;
        }
        // if (!this.props.display){
        //     return false;
        // }
    }
    
    render () {
        const orderIngredients = [];

        Object.keys(this.props.ingredients).forEach((key) => {
            orderIngredients.push(<li>{key}: {this.props.ingredients[key]}</li>)
        })    
        return (

            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger</p>
                <ul>
                    {orderIngredients}
                </ul>
                <button onClick={() => this.props.purchase(this.props.ingredients)}>BUTTON</button>
            </Aux>
        )
    }
}

export default OrderSummary;