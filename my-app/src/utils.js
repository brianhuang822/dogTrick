import { useState } from 'react';

/**
 * This function checks if local storage already has the value
 * you want to use for your variable, and uses it as the initial value
 * if so. Otherwise, the initial value is supplied.
 * @param {string} storageKeyName 
 * @param {any} initialValue
 * @returns the state variable, and the function that changes the
 * state variable
 */
function LocalStorageState(storageKeyName, initialValue){
    if (localStorage.getItem(storageKeyName)){
        const storageValue = JSON.parse(localStorage.getItem(storageKeyName));
        const [value, setValue] = useState(storageValue);
        return [value, setValue];
    }
    else{
        const [value, setValue] = useState(initialValue);
        localStorage.setItem(storageKeyName, JSON.stringify(value));
        return [value, setValue];
    }
}

const types = {
    LONG: 'Long',
    SINGLE: 'Single',
    START: 'Start',
    END: 'End'
};
Object.freeze(types);

const difficulty = {
    FUNDAMENTALS: 'Fundamentals',
    EASY: 'Easy',
    MEDIUM: 'Medium',
    HARD: 'Hard'
};
Object.freeze(difficulty);

export {LocalStorageState, types, difficulty};