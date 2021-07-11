import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root:{
        minWidth: 400
    },
    first:{

    },
    next: {
        marginLeft: 10
    }
};

function TypeCheckboxes(props) {

    const { classes, value, setValue } = props;

    const onChange = (type, checkboxValue) => {
        /*
            Creates new dictionary since useEffect checks if newValue === value,
            so it has to be a different object completely, not just a mutated
            dictionary
        */
        const newValue = {...value};
        newValue[type] = checkboxValue;
        console.log(newValue[type]);
        setValue(newValue);
    };

    React.useEffect(() => {
        localStorage.setItem('typeValue', JSON.stringify(value));
    }, [value]);

    return (
        <FormGroup className={classes.root} row>
            <FormControlLabel
                control={<Checkbox
                    className={classes.first}
                    color="primary" />}
                label="Long" labelPlacement="end" checked={value['long']}
                onChange={ e => onChange('long', e.target.checked)}
            />
            <FormControlLabel
                control={<Checkbox
                    className={classes.next}
                    color="primary" />}
                label="Single" labelPlacement="end" checked={value['single']}
                onChange={ e => onChange('single', e.target.checked)}
            />
            <FormControlLabel
                control={<Checkbox
                    className={classes.next}
                    color="primary" />}
                label="Start" labelPlacement="end" checked={value['start']}
                onChange={ e => onChange('start', e.target.checked)}
            />
            <FormControlLabel
                control={<Checkbox
                    className={classes.next}
                    color="primary" />}
                label="End" labelPlacement="end" checked={value['end']}
                onChange={ e => onChange('end', e.target.checked)}
            />
        </FormGroup>
    );
}

TypeCheckboxes.propTypes = {
    classes: PropTypes.object,
    value: PropTypes.object,
    setValue: PropTypes.func
};

export default withStyles(styles)(TypeCheckboxes);