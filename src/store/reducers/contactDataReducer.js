import * as actionTypes from '../actions/actions';
import contactDataForm from '../../Forms/contactDataForm';

const initialState = contactDataForm.orderForm;

const reducer = (state = initialState, action) => {
    console.log(initialState)
    return state;
}

export default reducer;