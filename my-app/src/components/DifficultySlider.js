import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const styles = {
    root: {
        width: '40%'
    },
    mark: {
        height: 10
    },
    markLabel: {
        fontSize: '20px'
    }
};

class DifficultySlider extends React.Component{

    marks = [
        {
          value: 0,
          label: 'Fundamentals',
        },
        {
          value: 10,
          label: 'Easy',
        },
        {
          value: 20,
          label: 'Medium',
        },
        {
          value: 30,
          label: 'Hard',
        },
      ];

    render() {
        const {classes} = this.props;

        return(
            <Slider
            classes={{
                root: classes.root,
                mark: classes.mark,
                markLabel: classes.markLabel
            }}
            min={0}
            step={10}
            max={30}
            marks={this.marks}
            />
            );
    }
}

DifficultySlider.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(DifficultySlider);