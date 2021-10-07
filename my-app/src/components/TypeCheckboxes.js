import React, { useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { types } from '../utils';

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
        setValue({...value, [type]: checkboxValue});
    };

    useEffect(() => {
        localStorage.setItem('typeValue', JSON.stringify(value));
    }, [value]);

    return (
        <FormGroup className={classes.root} row>
            {Object.values(types).map((typeLabel) => (
                <FormControlLabel key={'checkbox' + typeLabel}
                    control={<Checkbox
                        className={classes.first}
                        color="primary" />}
                    label={typeLabel} labelPlacement="end" checked={value[typeLabel]}
                    onChange={ e => onChange(typeLabel, e.target.checked)}
                />
            ))}
        </FormGroup>
    );
}

TypeCheckboxes.propTypes = {
    classes: PropTypes.object,
    value: PropTypes.object,
    setValue: PropTypes.func
};

export default withStyles(styles)(TypeCheckboxes);