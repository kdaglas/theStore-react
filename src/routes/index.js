import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBarView from '../views/NavBarView';
import LoginPage from '../views/LoginPage';
import fetchAllPage from '../views/fetchAllPage';
import Footer from '../components/Footer'


const Routes = () =>  (
    <BrowserRouter>
      <div>
        <NavBarView />
        <Route exact path="/" component={fetchAllPage} />
        <Route exact path="/login" component={LoginPage} />
        <Footer /> 
      </div>
    </BrowserRouter>
)

export default Routes;
