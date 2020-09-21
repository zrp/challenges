import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import isAuthenticated from '../services/authService';

// import route
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import NewHero from '../pages/NewHero';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
        }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={SignIn}/>
            <Route path='/signUp' component={SignUp}/>
            <Route path='/profile' component= {Profile}/>
            <Route path='/newhero' component= {NewHero}/>
            {/* <PrivateRoute path='/Home' component= {Home}/> */}
            <Route path='*' component = {() => <h1>Page not found 404</h1>}/>
            {/* <Route exact path='/' component={Login}/> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;