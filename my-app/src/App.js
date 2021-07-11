import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DifficultySlider from './components/DifficultySlider';
import TypeCheckboxes from './components/TypeCheckboxes';
// import AccordionPanels from './components/AccordionPanels';

const styles = {
    root: {
        textAlign: 'left',
        marginLeft: 100
    },
    difficulty: {
        marginTop: 50
    },
    difficultyHeader: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 20
    },
    typeCheckboxes: {
        marginTop: 20
    },
    AccordionPanels: {
        marginTop: 40
    }
};

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

function App(props) {
    document.title = 'Dog Tricks';
    const { classes } = props;

    const [sliderValue, setSliderValue] = LocalStorageState('sliderValue', 10);
    const [typeValue, setTypeValue] = LocalStorageState('typeValue',
                                                        {'long': false, 
                                                        'single': false, 
                                                        'start': false, 
                                                        'end': false});

    return (
        <div className={classes.root}>
            <div className={classes.difficulty}>
                <h1 className={classes.difficultyHeader}>Difficulty</h1>
                <DifficultySlider value={sliderValue} setValue={setSliderValue} />
            </div>
            <div className={classes.typeCheckboxes}>
                <TypeCheckboxes value={typeValue} setValue={setTypeValue}/>
            </div>
            {/* <div className={classes.AccordionPanels}>
                <AccordionPanels/>
            </div> */}
        </div>
    );
}

App.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(App);
