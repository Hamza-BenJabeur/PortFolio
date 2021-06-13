import React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import AppAndSideBar from './Menu.js'
import About from './About.js'
import ImageAvatar from './Avatar.js'
import Footer from './Footer.js'
import TechnicalSkills from './TechnicalSkills.js'
import Projects from './Projects.js'
import {Grid} from '@material-ui/core';
import Education from './Education.js'

function App() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Router>
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    >
  <AppAndSideBar handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} open={open}/>
  <ImageAvatar open={open}/>
  <Switch>
  <Route path="/" exact component={About} />
  <Route path="/technical" exact component={TechnicalSkills} />
  <Route path="/projects" exact component={Projects} />
  <Route path="/education" exact component={Education} />
  {/* <About open={open}/> */}
  {/* <TechnicalSkills open={open}/> */}
  {/* <Projects open={open}/> */}
  {/* <Education open={open}/> */}
  </Switch>
    </Grid>
    <Footer open={open}/>
    </Router>
  );
}

export default App;
