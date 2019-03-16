import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Home from '../components/Home';
// import About from '../components/About';
import Contact from '../components/Contact';
import LoginPage from '../views/LoginPage';


const Routes = () =>  (
    <BrowserRouter>
      <div>
        {/* <Navbar /> */}
        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />*/}
        <Route path="/contact" component={Contact} /> 
        <Route exact path="/" component={LoginPage} />
      </div>
    </BrowserRouter>
)

export default Routes;
