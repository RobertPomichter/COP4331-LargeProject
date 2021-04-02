import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';
import Menu from './core/Menu';
import Profile from "./user/Profile";
import Users from "./user/Users";
import EditProfile from "./user/EditProfile";
import PrivateRoute from "./auth/PrivateRoute"
import ForgotPassword from "./user/ForgotPassword";
import ResetPassword from "./user/ResetPassword";

const MainRouter = () => (
    <div>
        {/* <Menu / > */}    {/* Eventually, move/remove the Menu component
                        so it doesn't show up on every page*/}
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
            <PrivateRoute exact path='/user/:userId' component={Profile} />
            <PrivateRoute exact path='/users' component={Users} />
            <PrivateRoute exact path='/user/edit/:userId' component={EditProfile} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password/:resetPasswordToken" component={ResetPassword} />
        </Switch>
    </div>
)

export default MainRouter;