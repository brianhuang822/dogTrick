import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    first:{

    },
    next: {
        marginLeft: 50
    }
};

class TypeCheckboxes extends React.Component {
    render() {

        const { classes } = this.props;

        return (
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    control={<Checkbox
                        className={classes.first}
                        color="primary" />}
                    label="Long"
                    labelPlacement="end"
                />
                <FormControlLabel
                    control={<Checkbox
                        className={classes.next}
                        color="primary" />}
                    label="Single"
                    labelPlacement="end"
                />
                <FormControlLabel
                    control={<Checkbox
                        className={classes.next}
                        color="primary" />}
                    label="Start"
                    labelPlacement="end"
                />
                <FormControlLabel
                    control={<Checkbox
                        className={classes.next}
                        color="primary" />}
                    label="End"
                    labelPlacement="end"
                />
            </FormGroup>
        );
    }
}

TypeCheckboxes.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(TypeCheckboxes);