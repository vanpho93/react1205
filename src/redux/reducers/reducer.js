import { combineReducers } from 'redux';
import { filterModeReducer } from './filterMode.reducer';
import { wordsReducer } from './words.reducer';
import { shouldShowFormReducer } from './shouldShowForm.reducer';

export const reducer = combineReducers({
    words: wordsReducer,
    shouldShowForm: shouldShowFormReducer,
    filterMode: filterModeReducer
});
