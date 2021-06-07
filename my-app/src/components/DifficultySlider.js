import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

class DifficultySlider extends React.Component {

    constructor(props){
        super(props);
        this.getSliderValue = this.getSliderValue.bind(this);
        this.state = {
            value: 0
        };
    }

    componentDidMount(){
        this.getSliderValue();
    }
    handleChange = (e, v) => {
        localStorage.setItem('sliderValue', v);
        this.setState({value: v});
    }

    getSliderValue(){
        if (!localStorage.getItem('sliderValue')){
            localStorage.setItem('sliderValue', 20);
            this.setState({value: 20});
        }
        else{
            this.setState({value: localStorage.getItem('sliderValue')});
        }
    }

    marks = [
        { value: 0, label: 'Fundamentals' },
        { value: 10, label: 'Easy' },
        { value: 20, label: 'Medium' },
        { value: 30, label: 'Hard' }
    ];

    render() {
        const { classes } = this.props;
        return (
            <Slider
                classes={{
                    root: classes.root,
                    mark: classes.mark,
                    markLabel: classes.markLabel
                }}
                value={this.state.value}
                min={0}
                step={10}
                max={30}
                marks={this.marks}
                onChange={this.handleChange}
            />
        );
    }
}

DifficultySlider.propTypes = {
    classes: PropTypes.object,
    startValue: PropTypes.number
};

export default withStyles(styles)(DifficultySlider);