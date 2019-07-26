import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import ContendCards from '../../Containers/ContendCards';
import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { Route, Switch } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  App: {
    flexGrow: 1,
    background : blue[200],
    textAlign: 'center',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Switch>
        <Route path='/' component={ContendCards}></Route>
      </Switch>
       
    </div>
  );
}

export default App;
