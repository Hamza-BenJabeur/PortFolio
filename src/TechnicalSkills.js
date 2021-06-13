import {React } from 'react'
import {Container,Grid,Card, Typography,CardContent,CardMedia} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import * as data from './data.js'
const drawerWidth = 30;
const useStyles = makeStyles((theme) => ({
  cardGrid :{
    padding:"20px 0"
  } ,
  card :{
    height:"100%",
    display:"flex",
    flexDirection:"column"
  },
  cardMedia :{
    paddingTop:"56.25%"
  },
  cardContent :{
    flexGrow:1,
    display:"flex",
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


}))
export default function TechnicalSkills({open}) {
    const classes = useStyles();
    return (
      <div className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                        {data.skills.map((data,index)=>(
                           
                    <Grid item key={index} xs={12} sm={6} md={4}>

                        <Card className={classes.card} >
                                <CardMedia
                                className={classes.cardMedia}
                                image={data['image']}
                                title={data["title"]}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" className={classes.title} color="primary">
                                    {data["title"]}
                                    </Typography>
                                </CardContent>
                        </Card>

                    </Grid>
                        ))}
                </Grid>
            </Container>
        </div>
    )
}
