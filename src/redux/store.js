import { createStore } from 'redux';

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

export const store = createStore((state = defaultState, action) => {
    if (action.type === 'TOGGLE_FORM') return { ...state, shouldShowForm: !state.shouldShowForm };
    if (action.type === 'REMOVE_WORD') {
        const words = state.words.filter(w => w.id !== action.id);
        return { ...state, words };
    }
    if (action.type === 'TOGGLE_WORD') {
        const words = state.words.map(w => {
            if (w.id !== action.id) return w;
            return { ...w, isMemorized: !w.isMemorized };
        });
        return { ...state, words };
    }
    if (action.type === 'ADD_WORD') {
        return { ...state, words: state.words.concat(action.word), shouldShowForm: false }
    }
    if (action.type === 'SET_FILTER_MODE') {
        return { ...state, filterMode: action.filterMode };
    }
    return state;
});
