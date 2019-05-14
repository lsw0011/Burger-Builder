import * as actionTypes from '../actions/actions';

const initialState = {
    salad: 0,
    meat: 0, 
    cheese: 0,
    bacon: 0
}

const reducer = (state = initialState, action) => {
    console.log('mother fucker')
    const operations = {
        [actionTypes.INCREASE_INGREDIENT]:() => {
            const current = Object.assign({}, state);
            current[action.ingredient] += 1;
            return current
        },
        [actionTypes.DECREASE_INGREDIENT]:() => {
            const current = Object.assign({}, state);
            if (current[action.ingredient] > 0){
                current[action.ingredient] -= 1;
                return current
            }
        }
    }
    if(operations[action.type] !== undefined){
        return operations[action.type]()
    }else{
        return state;
    }
}


export default reducer;