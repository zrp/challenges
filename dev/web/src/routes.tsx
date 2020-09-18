import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import HeroList from './pages/HeroList';
import HeroForm from './pages/HeroForm';
import AmeacaList from './pages/AmeacaList'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/heroes" component={HeroList} />
            <Route path="/be-hero" component={HeroForm} />
            <Route path="/ameacas" component={AmeacaList} />

        </BrowserRouter>

    );
}

export default Routes;