import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


const styles = {
    root: {
        width: '40%',
        minWidth: 250
    },
    mark: {
        height: 10
    },
    markLabel: {
        fontSize: '16px'
    }
};

function DifficultySlider(props) {
      
    const { classes, value, setValue } = props;

    const marks = [
        { value: 0, label: 'Fundamentals' },
        { value: 10, label: 'Easy' },
        { value: 20, label: 'Medium' },
        { value: 30, label: 'Hard' }];
    
    React.useEffect(() => {
        localStorage.setItem('sliderValue', value);
    }, [value]);

    
    return (
        <Slider
        classes={{
            root: classes.root,
            mark: classes.mark,
            markLabel: classes.markLabel
        }}
        min={0} step={10} max={30}
        value={value} marks={marks}
        onChange={(e, v) => setValue(v)}
        />
        );
    }
    
    DifficultySlider.propTypes = {
        classes: PropTypes.object,
        value: PropTypes.number,
        setValue: PropTypes.func

    };
    
    export default withStyles(styles)(DifficultySlider);