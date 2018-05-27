import axios from 'axios';

const URL = 'https://server1205.herokuapp.com/word/';

export function toggleForm() {
    return { type: 'TOGGLE_FORM' };
}

export function setFilterMode(filterMode) {
    return { type: 'SET_FILTER_MODE', filterMode };
}

export function getAllWords() {
    return function(dispatch) {
        axios.get(URL)
        .then(response => {
            dispatch({ type: 'SET_WORDS', words: response.data.words })
        });
    }
}

export function removeWord(_id) {
    return function(dispatch) {
        axios.delete(URL + _id)
        .then(() => dispatch({ type: 'REMOVE_WORD', _id }));
    }
}

export function toggleWord(_id, isMemorized) {
    return function(dispatch) {
        axios.put(URL + _id, { isMemorized })
        .then(() => dispatch({ type: 'TOGGLE_WORD', _id }));
    }
}

export function addWord(en, vn) {
    return function(dispatch) {
        axios.post(URL, { en, vn })
        .then(response => {
            const { success, word } = response.data;
            if (!success) return alert('Cannot add word.');
            dispatch({ type: 'ADD_WORD', word });
        });
    }
}
