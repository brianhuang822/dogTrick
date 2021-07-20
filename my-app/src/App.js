import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Typography } from '@material-ui/core';

import DifficultySlider from './components/DifficultySlider';
import TypeCheckboxes from './components/TypeCheckboxes';
import WordGestureSwitch from './components/WordGestureSwitch';
import { LocalStorageState, types, difficulty } from './utils';

const styles = {
    root: {
        textAlign: 'left',
        marginLeft: 'max(60px, 10%)'
    },
    difficulty: {
        marginTop: 50
    },
    difficultyHeader: {
        display: 'flex',
        fontSize: 20
    },
    typeCheckboxes: {
        marginTop: 30
    },
    typeHeader: {
        marginTop: 30,
        fontSize: 18
    },
    wordGestureSwitch: {
        marginTop: 30
    },
    accordionPanels: {
        marginTop: 40,
        width: '90%'
    },
    accordionHeading: {

    },
    accordionDetails:{
        height: 'max(300, 20%)'
    },
    accordionWebsite: {
        width: '100%'
    }
};

function App(props) {
    document.title = 'Dog Tricks';
    const { classes } = props;

    //State variables for slider, type checkboxes and switch
    const [sliderValue, setSliderValue] = LocalStorageState('sliderValue', 10);
    const [typeValue, setTypeValue] = LocalStorageState('typeValue',
                                                        {'Long': false, 
                                                        'Single': false, 
                                                        'Start': false, 
                                                        'End': false});
    const [switchValue, setSwitchValue] = LocalStorageState('switchValue', false);

    // State variable that will be used to get the values from the above settings, which
    // will be used as search parameters to find the correct 10 websites and data
    const [settingsValue, setSettingsValue] = LocalStorageState('settingsValue',
                                                            {'slider': 0, 
                                                            'type': [false, false, false, false],
                                                            'switch': false});

    // Creates an array that holds 10 placeholder tricks for the 10 accordion panels
    const initContentValue = [];
    for (let i = 0; i < 10; i++){
        initContentValue.push({'link': 'about:blank', 
                               'type': types.SINGLE,
                               'difficulty': difficulty.FUNDAMENTALS,
                               'word': 'wow',
                               'gesture': 'wow' + i});
    }
    // State variable for accordion panels
    const [accordionValue, setAccordionValue] = LocalStorageState('accordionValue', initContentValue);

    useEffect(() => {
        const newSettings = {'slider': sliderValue, 'switch': switchValue};
        newSettings['type'] = Object.values(types).map((typeLabel) => 
                                                       typeValue[typeLabel]);
        setSettingsValue(newSettings);

    }, [sliderValue, typeValue, switchValue]);

    useEffect(() => {
        localStorage.setItem('settingsValue', JSON.stringify(settingsValue));
    }, [settingsValue]);

    const sliderConverter = {0: difficulty.FUNDAMENTALS, 
                             10: difficulty.EASY,
                             20: difficulty.MEDIUM,
                             30: difficulty.HARD};

    useEffect(() => {
        setAccordionValue(accordionValue);
        console.log(accordionValue);
        const convertedValue = settingsValue['slider'];
        console.log(convertedValue);
        console.log(sliderConverter[convertedValue]);
    }, []);

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
                {accordionValue.map((trick) => (
                    <Accordion key={trick.gesture} classes={{expanded: classes.expanded}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography className={classes.accordionHeading}> 
                                {trick.word}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordionDetails}>
                            <iframe className={classes.accordionWebsite} src={trick.link}/>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

App.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(App);
