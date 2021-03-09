import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from '../src/Component/Footer';
import Covid from '../src/Component/Covid';
const Router = () => {
    return (
        <BrowserRouter>
            
            <Route exact path="/" component={Covid} />
           
            <Footer />
        </BrowserRouter>
    )
}

export default Router;