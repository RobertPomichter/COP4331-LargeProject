import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';
import Menu from './core/Menu';

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
        </Switch>
    </div>
)

export default MainRouter;