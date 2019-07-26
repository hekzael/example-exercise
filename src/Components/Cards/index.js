import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    minWidth:200
  },
});

const ImgMediaCard = ( {data} ) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="User Image"
          height="140"
          image={data.avatar}
          title="User Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.first_name}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h6">
            {data.last_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ImgMediaCard