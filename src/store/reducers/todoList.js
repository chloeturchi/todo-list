import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    todos: [],
    error: false
};

const setTodos = (state, action) => {
    return updateObject( state, {

    });
};

const fetchTodosFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_INGREDIENTS: return setTodos(state, action);    
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchTodosFailed(state, action);
        default: return state;
    }
};

export default reducer;