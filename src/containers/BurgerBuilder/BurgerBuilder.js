import React, { Component } from 'react';
import axios from '../../axios-orders';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler';
import * as actionTypes from '../../store/actions/actions';


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 4,
            cheese: 1,
            bacon: 1
        },
        UI: {
            modal: false,
            menu: false,
            change: false
        }
    }
    
    urlHandler = () => {
        const keyString = [];
        Object.keys(this.props.ingredients).forEach(key => {
            keyString.push(`"${key}":"${this.props.ingredients[key]}"`)
        })
        this.props.history.push({pathname:'/checkout', search: `?ingredients={${keyString.join(',')}}`})
    }

    purchaseHandler = () => {
        this.props.onToggleChange();
        this.props.onPostOrder(this.props.ingredients, () => this.urlHandler());
    }


    render () {
        return (
            <Aux>
                <Modal changed={this.props.UI.change} display={this.props.UI.modal} toggle={this.props.onToggleModal}>
                    <OrderSummary purchase={this.purchaseHandler}
                        display={this.props.UI.modal}
                        ingredients={this.props.ingredients}></OrderSummary>
                </Modal>
                <Burger ingredients={this.props.ingredients} />
                <BuildControls ingredients={this.props.ingredients}
                    increase={this.props.onIncreaseAmount}
                    decrease={this.props.onDecreaseAmount}
                    toggle={this.props.onToggleModal}/>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: {
            salad: state.ingredients.salad,
            meat: state.ingredients.meat,
            cheese: state.ingredients.cheese,
            bacon: state.ingredients.bacon
        },
        UI: {
            modal: state.UI.modal,
            menu: state.UI.menu,
            change: state.UI.change,
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncreaseAmount: (ingredient) => dispatch(actionTypes.increaseIngredient(ingredient)),
        onDecreaseAmount: (ingredient) => dispatch({type: actionTypes.DECREASE_INGREDIENT, ingredient: ingredient}),
        onPostOrder: (ingredients, cb) => dispatch(actionTypes.postOrder(ingredients, cb)),
        onToggleModal: () => dispatch({type: actionTypes.TOGGLE_MODAL}),
        onToggleChange: () => dispatch({type: actionTypes.TOGGLE_CHANGE})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withErrorHandler(BurgerBuilder, axios)));