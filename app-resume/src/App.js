import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio.js';
import Resume from './pages/Resume/Resume.js';
import Profile from './components/Profile/Profile.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';

import './App.css';

import './components/Footer';


function App() {
  return (
  <Container>
   {/* In here I am telling js to put eveything is in grip layer -which is 12 equal pieces if i say div column of 12 it is going to take up whole pages*/}
     <Grid container>
       <Grid item xs={12} sm={12} md={4} lg={3}>
       <Profile/>
       </Grid>
       <Grid item xs style={{backgroundColor:'red'}}>
       <Header/>
       <Router>
       <Footer/>
       <Routes>
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/" element={<Resume/>} />   
        </Routes>
       </Router>
       <Footer/>
       </Grid>
     </Grid>
   </Container>
  );
}

export default App;
