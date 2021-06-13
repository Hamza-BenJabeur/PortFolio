import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography,Container,List,ListItem,ListItemIcon,ListItemText,Button,Link} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import CodeIcon from '@material-ui/icons/Code';
import * as data from './data.js'


const useStyles = makeStyles((theme) => ({
    status:{
        display:"flex",

    },
    tasks:{
        marginLeft:"23px"
    }
}));

export default function Main() {
const classes = useStyles();
  return (
    
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom color="primary">
        PROJECTS
      </Typography>
     
      {data.informations.map((information,index)=>(

      <Container key={index}>
         <Divider />
      <Typography variant="h6" gutterBottom color="secondary">
       {information.name}
      </Typography>
      <div className={classes.status}>
          <Typography variant="h6" color="textSecondary">{information.status}</Typography>
          <Typography variant="h6" color="textSecondary">{information.duration}({information.situation})</Typography>
          
          
      </div>
      <Container gutterBottom>
                 <Typography variant="h6" gutterBottom>
                {information.description}
                 </Typography>
            </Container>
            
          <Typography variant="h6" color="textSecondary" gutterBottom className={classes.tasks}>
              Main Tasks
              </Typography>
              <List gutterBottom>
          {information.tasks.map((text, index) => (
            <ListItem  key={index}>
              <ListItemIcon><CodeIcon/></ListItemIcon>
              <ListItemText primary={text} className={classes.links}/>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" color="textSecondary" gutterBottom className={classes.tasks}>
              Technologies used
              </Typography>
              <List gutterBottom>
          {information.technologies.map((text, index) => (
            <ListItem  key={index}>
              <ListItemIcon><CodeIcon/></ListItemIcon>
              <ListItemText primary={text} className={classes.links}/>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" color="textSecondary" gutterBottom className={classes.tasks}>
              Source Code Of The Project
              </Typography>
        <div style={{display:"flex",justifyContent:"center",marginBottom:"10px"}} >
          <Link href={information.source}>
               <Button variant="contained" color="primary">Source Code</Button>
          </Link>
        </div>
        </Container>
      ))}
    </Grid>
 

  );
}