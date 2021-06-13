import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Container,Typography,Divider} from '@material-ui/core';
import clsx from 'clsx';
const drawerWidth = 30;
const useStyles = makeStyles((theme) => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }
}))
export default function About({open}) {
    const classes = useStyles();
    return (
        <div className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}>
            
            <Container maxWidth="sm">
            <Typography variant="h6" gutterBottom color="primary">
                   ABOUT ME
            </Typography>
            <Divider />
            <div className={classes.drawerHeader}/>
                 <Typography variant="h6">
                 After being a Major in Electronics, I decided to embark in a
                new journey in the world of computer sciences, which was
                my passion. At RBK Tunisia, I spent +1200 hours coding in
                +50 sprints. I accomplished 5 fullstack projects while
                working as a scrum master or as a developer. Dynamic,
                enthusiast, and energetic, I bring positive vibes wherever I
                go.
                 </Typography>
                 <div className={classes.drawerHeader}/>
            </Container>
        </div>
    )
}
