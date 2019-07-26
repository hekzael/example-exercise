import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Cards from '../../Components/Cards';
import { Typography, Button } from '@material-ui/core';
import Search from '../../Components/Search';
import Axios from 'axios';
import PorcentCharts from '../../Components/PorcentCharts';

const useStyles = makeStyles(theme => ({
  rootCard: {
    flexGrow: 1,
    paddingTop: '100px',
    padding: theme.spacing(3, 2),
  },
  paper: {
    height: 100,
  
  },
  control: {
    padding: theme.spacing(2),
  },
  button: {
    backgroundColor: theme.palette.primary.main
  }
}));

const ContendCards = () => {
  const [data, setData] = useState();
  const [isLoaded, setLoad] = useState(false);
  const [page, setPage] = useState(0);
  const [ count, setCount] = useState(0)
  const classes = useStyles();



  

  useEffect( () => {
    let url = 'https://reqres.in/api/users'; // No devuelve todos los usuarios totales, si no los de la primera pagina
    let pageSearch = '?page='+(page+1) // para aceder a cada una de las paginas
    Axios.get(url+pageSearch).then( response => response.data).then(data => {
      setData(data)
      setCount(data.total)
    }).catch(err => {
      console.log(err)
    })
  },[page])

  useEffect( () => {
    if (data) {
        setLoad(true)
      }
  }, [data])

  if(!isLoaded) {
      return null;
  }

  const handleBackButtonClick = () => {
    onChangePage( page - 1);
  }

  const handleNextButtonClick = () => {
    onChangePage( page + 1);
  }

  const onChangePage = ( newPage ) => {
    setPage(newPage);
  }

  return (
    <Grid container className={classes.rootCard} spacing={2}>
      <Grid item xs={8}>
        <Grid container justify="center" spacing={5}>
          {data.data.map(value => (
            <Grid key={value.id} item>
              <Cards className={classes.paper} data = {value}/>
            </Grid>
          ))}
        </Grid>
        <Grid container justify='center' spacing={3}>
          <Grid item xs={2}>
            <Button
              variant="contained" 
              color="primary"
              className={classes.button}
              disabled = { page === 0}
              onClick={() => handleBackButtonClick()}
            >Anterior</Button>
          </Grid>
          <Grid item xs={2}>
            <Typography>{page+1}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained" 
              color="primary"
              className={classes.button}
              disabled = {page >= Math.ceil(count/3)-1} 
              onClick={() => handleNextButtonClick()}
            >Siguiente</Button>
          </Grid> 
      </Grid>
      </Grid> 
      <Grid item xs={4}>
        <Grid container justify='center' spacing={2}>
          <Grid item>
            <Paper className={classes.rootCard}>
              <Typography variant="h5" component="h3">
                Ejercicio 1
              </Typography>
              <Typography component="p">
                Porcentaje :
              </Typography>
              {PorcentCharts(data)} %
            </Paper>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="h3">
              Ejercicio 2
            </Typography>
            <Search onChangePage={(e) => onChangePage(e-1)}/>
            
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContendCards