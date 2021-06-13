import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Drawer,CssBaseline,AppBar,Toolbar,List,Typography,Divider,IconButton,ListItem,ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import profile from './image/HAMZA.PNG'
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-around',
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
  },
  information:{
    display:"flex",
  },
  name:{
    paddingLeft:"5px",
    paddingTop:"4px"
  },
  links:{
    textDecoration:"none",
    color:"black"
  }
}));

export default function AppAndSideBar({handleDrawerClose,handleDrawerOpen,open}) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <CssBaseline  />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left" 
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
        <div className={classes.information}>
     
         <Avatar alt="Remy Sharp" src={profile} className={classes.small} />
         <Typography variant='subtitle1' className={classes.name}>hamza ben jabeur </Typography>
      
         </div>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          
          </IconButton>
       
        </div>
        <Divider />
        <List>
         
            <ListItem button >
              <Link to='/'  className={classes.links}>
              <ListItemText primary="About me" />
              </Link> 
            </ListItem>

            <ListItem button >
              <Link to='/projects' className={classes.links}>
              <ListItemText primary="Projects" />
              </Link>
            </ListItem>

            <ListItem button >
            <Link to='/education' className={classes.links}>
              <ListItemText primary="Educational History" />
              </Link>
            </ListItem>

        </List>
        <Divider />
        <List>
       
            <ListItem button >
              <Link to='/technical' className={classes.links}>
              <ListItemText primary="Technical Skills" />
              </Link>
            </ListItem>
        
        </List>
      </Drawer>
    </div>
  );
}