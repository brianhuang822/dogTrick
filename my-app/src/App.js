import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DifficultySlider from './components/DifficultySlider';
// import './App.css';

const styles = {
  root: {
    textAlign: 'left',
    marginLeft: 100
  },
  difficulty: {
    marginTop: 50
  },
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 20
  }
};

function App(props) {
	document.title = 'Dog Tricks';
  const {classes} = props;
  return (
    <div className={classes.root}>
      <div className={classes.difficulty}>
        <h1 className={classes.appHeader}>Difficulty</h1>
        <DifficultySlider/>
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object,
};


export default withStyles(styles)(App);
