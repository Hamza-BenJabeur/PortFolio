import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Picture from './image/Hamza.jpg'
import {Typography,Grid,Box} from '@material-ui/core';
import clsx from 'clsx';
const drawerWidth = 30;
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(40),
    height: theme.spacing(40),
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
  subtitle:{
    fontSize: "2em"
  }
}));

export default function ImageAvatar({open}) {
  const classes = useStyles();

  return (
    <main
    className={clsx(classes.content, {
      [classes.contentShift]: open,
    })}>
      <div className={classes.drawerHeader}/>
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    >
            <Avatar alt="Remy Sharp" src={Picture} className={classes.large} />
        <Typography variant="h2"color="primary">   
        <Box fontWeight="fontWeightBold" m={1}>
                Ben Jabeur Hamza
       </Box>
        </Typography>
        <Typography variant='subtitle1'color= 'textSecondary' className={classes.subtitle}>   
        <Box fontWeight="fontWeightBold" sm={1}>
                Javascript Developer
       </Box>
        </Typography>
    </Grid>
     

    </main>
  );
}