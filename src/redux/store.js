import { createStore, combineReducers } from 'redux';

const defaultWords = [
    { id: 'a1', en: 'One', vn: 'Mot', isMemorized: true },
    { id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false },
    { id: 'a3', en: 'Three', vn: 'Ba', isMemorized: true }
];

const defaultState = {
    words: defaultWords,
    shouldShowForm: false,
    filterMode: 'SHOW_ALL'
};

function wordsReducer(state = defaultWords, action) {
    if (action.type === 'ADD_WORD') return state.concat(action.word)
    if (action.type === 'REMOVE_WORD') {
        return state.filter(w => w.id !== action.id);
    }
    if (action.type === 'TOGGLE_WORD') {
        return state.map(w => {
            if (w.id !== action.id) return w;
            return { ...w, isMemorized: !w.isMemorized };
        });
    }
    return state;
}

function shouldShowFormReducer(state = false, action) {
    if (action.type === 'TOGGLE_FORM') return !state;
    if (action.type === 'ADD_WORD') return false;
    return state;
}

function filterModeReducer(state = false, action) {
    if (action.type === 'SET_FILTER_MODE') return action.filterMode;
    return state;
}

const reducer = combineReducers({
    words: wordsReducer,
    shouldShowForm: shouldShowFormReducer,
    filterMode: filterModeReducer
});

export const store = createStore(reducer);
