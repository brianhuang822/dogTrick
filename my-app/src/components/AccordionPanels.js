import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = {
    root:{
        width: '90%'
    },
    expanded:{

    },
    heading:{

    },
    details:{
        height: 400
    },
    website:{
        width: '100%'
    }
};

function AccordionPanels(props) {
    const {classes, value, setValue, settings} = props;

    const sliderConverter = {0: 'FUNDAMENTALS', 10: 'EASY', 20: 'MEDIUM', 30: 'HARD'};

    // Placeholder useEffect so eslint won't complain about unused variables
    // This will be used eventually to update accordion contents
    React.useEffect(() => {
        setValue(value);
        console.log(value);
        const convertedValue = settings['slider'];
        console.log(convertedValue);
        console.log(sliderConverter[convertedValue]);
    }, []);

    return (
        <div className={classes.root}>
            <Accordion classes={{expanded: classes.expanded}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography className={classes.heading}> Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <iframe className={classes.website}src={value}></iframe>
                </AccordionDetails>
            </Accordion>
            <Accordion classes={{expanded: classes.expanded}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography className={classes.heading}> Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <iframe className={classes.website}src={value}></iframe>
                </AccordionDetails>
            </Accordion>
            <Accordion classes={{expanded: classes.expanded}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography className={classes.heading}> Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <iframe className={classes.website}src={value}></iframe>
                </AccordionDetails>
            </Accordion>
            <Accordion classes={{expanded: classes.expanded}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography className={classes.heading}> Accordion 4</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <iframe className={classes.website}src={value}></iframe>
                </AccordionDetails>
            </Accordion>
            <Accordion classes={{expanded: classes.expanded}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography className={classes.heading}> Accordion 5</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <iframe className={classes.website}src={value}></iframe>
                </AccordionDetails>
            </Accordion>
            <Accordion classes={{expanded: classes.expanded}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography className={classes.heading}> Accordion 6</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <iframe className={classes.website}src={value}></iframe>
                </AccordionDetails>
            </Accordion>
            <Accordion classes={{expanded: classes.expanded}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography className={classes.heading}> Accordion 7</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <iframe className={classes.website}src={value}></iframe>
                </AccordionDetails>
            </Accordion>
            <Accordion classes={{expanded: classes.expanded}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography className={classes.heading}> Accordion 8</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <iframe className={classes.website}src={value}></iframe>
                </AccordionDetails>
            </Accordion>
            <Accordion classes={{expanded: classes.expanded}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography className={classes.heading}> Accordion 9</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <iframe className={classes.website}src={value}></iframe>
                </AccordionDetails>
            </Accordion>
            <Accordion classes={{expanded: classes.expanded}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography className={classes.heading}> Accordion 10</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <iframe className={classes.website}src={value}></iframe>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

AccordionPanels.propTypes = {
    classes: PropTypes.object,
    value: PropTypes.object,
    setValue: PropTypes.func,
    settings: PropTypes.object
};

export default withStyles(styles)(AccordionPanels);