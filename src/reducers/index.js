import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

import FavoriteReducer from '../components/FavoriteMovieList';

const rootReducer = combineReducers({
    movieReducer,
    FavoriteReducer
});

export default rootReducer;