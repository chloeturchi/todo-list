import * as actionTypes from './actionTypes';
import axios from '../../axios-todos';

export const setTodos = ( todos ) => {
    return {
        type: actionTypes.SET_TODOS,
        todos: todos
    };
};

export const fetchTodosFailed = () => {
    return {
        type: actionTypes.FETCH_TODOS_FAILED
    };
};

export const initTodos = () => {
    return dispatch => {
        axios.get('https://todolist-f2ac4.firebaseio.com/todos.json')
            .then( response => {
               dispatch(setTodos(response.data));
            } )
            .catch( error => {
                dispatch(fetchTodosFailed());
            } );
    };
};