import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography,Container} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import * as data from './data.js'


const useStyles = makeStyles((theme) => ({
    status:{
        display:"flex",

    },
    tasks:{
        marginLeft:"23px"
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'space-around',
    },
}));

export default function Information() {
const classes = useStyles();
  return (
    
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom color="primary">
       EDUCATIONAL HISTORY
      </Typography>
     
      {data.educations.map((education,index)=>(

      <Container key={index}>
     

         <Divider />
        <div className={classes.drawerHeader}/>

      <Typography variant="h6" gutterBottom color="secondary">
       {education.title}
      </Typography>
      <div className={classes.status}>
          <Typography variant="h6" color="textSecondary">{education.school}</Typography>
          <Typography variant="h6" color="textSecondary">{education.duration}</Typography>
          
          
      </div>
      <Container gutterBottom>
                 <Typography variant="h6" gutterBottom>
                {education.description}
                 </Typography>
            </Container>
        </Container>
      ))}
    </Grid>
 

  );
}