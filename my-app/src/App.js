import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DifficultySlider from './components/DifficultySlider';
import TypeCheckboxes from './components/TypeCheckboxes';
import WordGestureSwitch from './components/WordGestureSwitch';
import AccordionPanels from './components/AccordionPanels';

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
        fontSize: 20
    },
    typeCheckboxes: {
        marginTop: 20
    },
    typeHeader: {
        marginTop: 30,
        fontSize: 18
    },
    wordGestureSwitch: {
        marginTop: 30
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

    //State variables for slider, type checkboxes and switch
    const [sliderValue, setSliderValue] = LocalStorageState('sliderValue', 10);
    const [typeValue, setTypeValue] = LocalStorageState('typeValue',
                                                        {'long': false, 
                                                        'single': false, 
                                                        'start': false, 
                                                        'end': false});
    const [switchValue, setSwitchValue] = LocalStorageState('switchValue', false);

    // State variable that will be used to get the values from the above settings, which
    // will be used as search parameters to find the correct 10 websites and data
    const [settingsValue, setSettingsValue] = LocalStorageState('settingsValue',
                                                            {'slider': 0, 
                                                            'type': [false, false, false, false],
                                                            'switch': false});

    // Creates an array that holds 10 placeholder htmls for the 10 accordion panels
    const initContentValue = [];
    for (let i = 0; i < 10; i++){
        initContentValue.push('about:blank');
    }
    // State variable for accordion panels
    const [accordionValue, setAccordionValue] = LocalStorageState('accordionValue', initContentValue);

    React.useEffect(() => {
        const newSettings = {'slider': sliderValue, 'switch': switchValue};
        newSettings['type'] = [typeValue['long'], 
                               typeValue['single'], 
                               typeValue['start'], 
                               typeValue['end']];
        setSettingsValue(newSettings);

    }, [sliderValue, typeValue, switchValue]);

    React.useEffect(() => {
        localStorage.setItem('settingsValue', JSON.stringify(settingsValue));
    }, [settingsValue]);

    return (
        <div className={classes.root}>
            <div className={classes.difficulty}>
                <h1 className={classes.difficultyHeader}>Difficulty</h1>
                <DifficultySlider value={sliderValue} setValue={setSliderValue} />
            </div>
            <div className={classes.typeCheckboxes}>
                <h1 className={classes.typeHeader}> Dog Trick Types</h1>
                <TypeCheckboxes value={typeValue} setValue={setTypeValue}/>
            </div>
            <div className={classes.wordGestureSwitch}>
                <WordGestureSwitch value={switchValue} setValue={setSwitchValue}/>
            </div>
            <div className={classes.AccordionPanels}>
                <AccordionPanels
                    value={accordionValue} 
                    setValue={setAccordionValue} 
                    settings={settingsValue}
                />
            </div>
        </div>
    );
}

App.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(App);
