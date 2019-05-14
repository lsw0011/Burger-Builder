import axios from '../../axios-orders';

export const DECREASE_INGREDIENT = 'DECREASE_INGREDIENT';
export const INCREASE_INGREDIENT = 'INCREASE_INGREDIENT';
export const POST_ORDER = 'POST_ORDER';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_CHANGE = 'TOGGLE_CHANGE';


export const increaseIngredient = (ingredient) => {
    return dispatch => {
        dispatch(addIngredient(ingredient))
    }
};

export const postOrder = (ingredients, cb) => {

    return dispatch => {
        axios.post('/orders.json', ingredients)
            .then(response => {
                return dispatch(postOrderForReal(ingredients, cb))
            })
        }
}

export const addIngredient = (ingredient) => {
    return {type: INCREASE_INGREDIENT, ingredient: ingredient}
}

export const postOrderForReal = (ingredients, cb) => {
    return {type: POST_ORDER, ingredients: ingredients, cb: cb}
}