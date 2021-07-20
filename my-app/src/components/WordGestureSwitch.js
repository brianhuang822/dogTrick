import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';


const styles = {
    root: {
    }
};

function WordGestureSwitch(props) {
      
    const { classes, value, setValue } = props;

    useEffect(() => {
        localStorage.setItem('switchValue', JSON.stringify(value));
    }, [value]);

    return (
        <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Show Word or Gesture</Grid>
            <Grid item>
                <Switch
                    className = {classes.root} color={'primary'} checked={value}
                    onChange={(e) => setValue(e.target.checked)}
                />
            </Grid>
            <Grid item>Show Both</Grid>
        </Grid>
    );
}

WordGestureSwitch.propTypes = {
    classes: PropTypes.object,
    value: PropTypes.bool,
    setValue: PropTypes.func
};
    

export default withStyles(styles)(WordGestureSwitch);