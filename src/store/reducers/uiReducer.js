import * as actionTypes from '../actions/actions'

const initialState = {
    UI: {
        modal: false,
        menu: false,
        change: false,
        redirect: false
    }
}

const copyState = (state) => {
    const existingState = Object.assign({}, state);
    return existingState;
}

const reducer = (state = initialState, action) => {
    const newState = copyState(state);
    const operations = {
        [actionTypes.TOGGLE_MODAL]: () => {
            newState.modal = !newState.modal;
        },
        [actionTypes.TOGGLE_CHANGE]: () => {
            newState.change = !newState.change;
        },
        [actionTypes.POST_ORDER]: () => {
            newState.modal = !newState.modal;
            newState.change = !newState.change;
            newState.redirect = !newState.redirect;
            action.cb()
        }
    }
    if(operations[action.type] !== undefined) {
        operations[action.type]();
        return newState;
    }else{
        return state;
    }
}

export default reducer;