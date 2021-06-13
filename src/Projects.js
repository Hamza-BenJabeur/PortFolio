import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from './Main.js';
import clsx from 'clsx';
const drawerWidth = 30;
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    justifyContent:"center"
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
}));
export default function Projects({open}) {
  const classes = useStyles();

  return (
    <div
    className={clsx(classes.content, {
      [classes.contentShift]: open,
    })}>
      <CssBaseline />
      <Container >
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main/>
          </Grid>
        </main>
      </Container>
    </div>
  );
}