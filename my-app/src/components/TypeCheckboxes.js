import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    first:{

    },
    next: {
        marginLeft: 10
    }
};

function TypeCheckboxes(props) {

    const [longValue, setLongValue] = useState(
        localStorage.getItem('longValue') == 'true' || false
    );
    const [singleValue, setSingleValue] = useState(
        localStorage.getItem('singleValue') == 'true' || false
    );
    const [startValue, setStartValue] = useState(
        localStorage.getItem('startValue') == 'true' || false
    );
    const [endValue, setEndValue] = useState(
        localStorage.getItem('endValue') == 'true' || false
    );

    React.useEffect(() => {
        localStorage.setItem('longValue', longValue);
        localStorage.setItem('singleValue', singleValue);
        localStorage.setItem('startValue', startValue);
        localStorage.setItem('endValue', endValue);
    });

    const { classes } = props;

    return (
        <FormGroup aria-label="position" row>
            <FormControlLabel
                control={<Checkbox
                    className={classes.first}
                    color="primary" />}
                label="Long" labelPlacement="end" checked={longValue}
                onChange={ e => setLongValue(e.target.checked)}
            />
            <FormControlLabel
                control={<Checkbox
                    className={classes.next}
                    color="primary" />}
                label="Single" labelPlacement="end" checked={singleValue}
                onChange={ e => setSingleValue(e.target.checked)}
            />
            <FormControlLabel
                control={<Checkbox
                    className={classes.next}
                    color="primary" />}
                label="Start" labelPlacement="end" checked={startValue}
                onChange={ e => setStartValue(e.target.checked)}
            />
            <FormControlLabel
                control={<Checkbox
                    className={classes.next}
                    color="primary" />}
                label="End" labelPlacement="end" checked={endValue}
                onChange={ e => setEndValue(e.target.checked)
                }
            />
        </FormGroup>
    );
}

TypeCheckboxes.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(TypeCheckboxes);