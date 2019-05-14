import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import axios from '../../axios-orders';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData'
import withErrorHandler from '../../hoc/withErrorHandler';

class Checkout extends Component {
    
    componentWillMount = () => {
        if (this.props.location.search){
            this.setState({ingredients: JSON.parse(this.props.location.search.replace(/%22/g,'"').split('=')[1])})
        }
    }

 
    checkoutCancelled = () => {
        this.props.history.goback();
    }

    renderContactForm = () => {
        this.props.history.push({pathname: '/checkout/contact-data'});        

            // axios.post('/orders.json', {ingredients})
            //     .then(response => {                
            //         this.props.history.push({pathname: '/checkout/contact-data'});        
            //     }).catch(error => console.log(error))
    }

    completeCheckout = (ingredients, userData) => {
        axios.post('/orders.json', {orderDetails: {ingredients: ingredients, userData: userData}})
            .then(response => {
            }).catch(error => console.log(error))

    }

    render() {
        return (
            <div>
                <Route exact path="/checkout"><CheckoutSummary ingredients={this.state.ingredients}
                    continue={this.renderContactForm}
                    cancelled={this.checkoutCancelled}/></Route>
                <Route path={this.props.match.path + "/contact-data"} 
                    render={() => (<ContactData complete={this.completeCheckout}
                        ingredients={this.state.ingredients}/>)}/>
            </div>
        ); 
       
    }
}

export default withRouter(withErrorHandler(Checkout, axios));