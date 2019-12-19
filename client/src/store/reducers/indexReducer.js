import { combineReducers } from 'redux';
import recipesReducer from './recipeReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    recipes: recipesReducer,
    auth: authReducer,
    error: errorReducer
})