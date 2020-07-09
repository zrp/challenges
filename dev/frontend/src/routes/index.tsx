import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';
import Dashboard from '../pages/dashboard';
import Login from '../pages/SignIn/Index';
import Hero from '../pages/Hero';
import EditHero from '../pages/Hero/Edit';
import NewHero from '../pages/Hero/New';
import History from '../pages/Threat';
import Menu from '../components/menu';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Menu>
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/Heroes" component={Hero} isPrivate />
      <Route path="/newHero" component={NewHero} isPrivate />
      <Route path="/edithero/:id" component={EditHero} isPrivate />
      <Route path="/history" component={History} isPrivate />
    </Menu>
  </Switch>
);

export default Routes;
