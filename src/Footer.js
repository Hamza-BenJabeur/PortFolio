import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import clsx from 'clsx';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import {  List,ListItem,ListItemText,ListItemIcon,Link} from '@material-ui/core';
import ArrowRightAltSharpIcon from '@material-ui/icons/ArrowRightAltSharp';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
    footer:{
    backgroundColor:theme.palette.background.paper,
    padding:"5px 0px",
    display:"flex",
    justifyContent:"space-around",
    flexWrap:"flexWrap"
  
    },
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
        padding: theme.spacing(1,0,0,0),
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
      links:{
          color:"gray"
      }
  }))
export default function Footer({open}) {
    const classes = useStyles();
    return (
        <div className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}>
        <div className={classes.footer}>
    <div className={classes.drawerHeader}/>
              
    <div>
    <Typography variant="h6" align="center" gutterBottom color="primary">
       LANGUAGES
    </Typography>
    <List>
          {[ 'Arabe','English'].map((text, index) => (
            <ListItem  key={index}>
              <ListItemIcon><ArrowRightAltSharpIcon/></ListItemIcon>
              <ListItemText primary={text} className={classes.links}/>
            </ListItem>
          ))}
        </List>
    </div>
    <div>
    <Typography variant="h6" align="center" gutterBottom color="primary" >
      HOBBIES
    </Typography>
    <List>
          
            <ListItem>
              <ListItemIcon><SportsSoccerIcon/></ListItemIcon>
              <ListItemText primary="Foot-Ball" className={classes.links}/>
            </ListItem>
            <ListItem>
              <ListItemIcon><MusicNoteIcon/></ListItemIcon>
              <ListItemText primary="Music" className={classes.links}/>
            </ListItem>
            <ListItem>
              <ListItemIcon><SportsEsportsIcon/></ListItemIcon>
              <ListItemText primary="Gaming" className={classes.links}/>
            </ListItem>
         
        </List>
    </div>
    






    <div>
    <Typography variant="h6" align="center" gutterBottom color="primary" >
    CONTACT ME AT
    </Typography>
          <List>
            <ListItem >
              <ListItemIcon><EmailIcon/></ListItemIcon>
              <ListItemText primary="hamza.mhbj@gmail.com" className={classes.links}/>
            </ListItem>
            <Link href="https://www.linkedin.com/in/hamza-jabeur-9732b01bb/" className={classes.links}>
            <ListItem button>
              <ListItemIcon><LinkedInIcon/></ListItemIcon>
              <ListItemText primary="LinkedIn" color= 'textSecondary'/>
            </ListItem>
              </Link>
              <Link href="https://github.com/Hamza-BenJabeur?tab=repositories" className={classes.links}>
            <ListItem button>
              <ListItemIcon><GitHubIcon/></ListItemIcon>
              <ListItemText primary="GitHub" />
            </ListItem>
            </Link>
            <ListItem >
              <ListItemIcon><PhoneIcon/></ListItemIcon>
              <ListItemText primary="+216 26 468 529" className={classes.links}/>
            </ListItem>
           
         
         </List>
    </div>

        </div>
        </div>
    )
}
