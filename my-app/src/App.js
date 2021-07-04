import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DifficultySlider from './components/DifficultySlider';
import TypeCheckboxes from './components/TypeCheckboxes';
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

function App(props) {
    document.title = 'Dog Tricks';
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.difficulty}>
                <h1 className={classes.difficultyHeader}>Difficulty</h1>
                <DifficultySlider />
            </div>
            <div className={classes.typeCheckboxes}>
                <TypeCheckboxes/>
            </div>
            <div className={classes.AccordionPanels}>
                <AccordionPanels/>
            </div>
        </div>
    );
}

App.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(App);
