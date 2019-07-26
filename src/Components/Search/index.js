import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  rootSearch: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

const Search = ( {onChangePage} ) => {
  const classes = useStyles();

  const [ dataSearch, setDsearch ] = useState(0)

  const handleChange = (e) => {
    let a = parseInt(e.target.value)
    setDsearch(a)
    if(e.target.value === ''){
      setDsearch(0)
    }
  }

  const handleClick = () => {
    onChangePage(dataSearch);
  }

  return (
    <Paper className={classes.rootSearch}>
      <InputBase
        className={classes.input}
        placeholder="Search Page"
        inputProps={{ 'aria-label': 'Search' }}
        onChange = {(e)=> handleChange(e)}
      />
      <IconButton 
        className={classes.iconButton} 
        aria-label="Search"
        onClick = {() => handleClick()}
        >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search