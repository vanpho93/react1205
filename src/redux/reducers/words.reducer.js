const defaultWords = [
    { id: 'a1', en: 'One', vn: 'Mot', isMemorized: true },
    { id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false },
    { id: 'a3', en: 'Three', vn: 'Ba', isMemorized: true }
];

export function wordsReducer(state = defaultWords, action) {
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
