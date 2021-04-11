import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './core/LandingPage.js';
import Signin from './user/Signin';
import Signup from './user/Signup';
import Menu from './core/Menu';
import Profile from "./user/Profile";
import Users from "./user/Users";
import EditProfile from "./user/EditProfile";
import PrivateRoute from "./auth/PrivateRoute"
import ForgotPassword from "./user/ForgotPassword";
import ResetPassword from "./user/ResetPassword";
import Dashboard from "./core/Dashboard";

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/dashboard' component={Dashboard} />

            {/* Changing these routes to be nested inside the Dashboard component */}
            {/*
            <PrivateRoute exact path='/user/:userId' component={Profile} />
            <PrivateRoute exact path='/users' component={Users} />
            <PrivateRoute exact path='/user/edit/:userId' component={EditProfile} />
            
            <Route exact path="/reset-password/:resetPasswordToken" component={ResetPassword} />
            */}
        </Switch>
    </div>
)

export default MainRouter;