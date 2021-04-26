import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import '../App.scss';
import Menu from './Menu.js';
import Profile from '../user/Profile.js';
import Users from '../user/Users';
import EditProfile from '../user/EditProfile';
import PrivateRoute from "../auth/PrivateRoute";
import Home from './Home.js';
import InventoryPanel from './InventoryPanel.js';
import Sidebar from '../app/Sidebar';
import RecipeSearch from '../core/RecipeSearch';


class Dashboard extends Component {

    render() {
        return (
            <div className='dashboardPageContainer'>
                <Menu />
                {/*<Sidebar />*/}
                <div className='activeComponent'>
                <Switch>
                    {/* Changing these routes to be nested inside the Dashboard component */}
                    <PrivateRoute exact path='/dashboard' component={Home}/>
                    <PrivateRoute exact path='/dashboard/user/:userId' component={Profile} />
                    <PrivateRoute exact path='/dashboard/users' component={Users} />
                    <PrivateRoute exact path='/dashboard/user/edit/:userId' component={EditProfile} />
                    <PrivateRoute exact path='/dashboard/inventoryTesting/:userId' component={InventoryPanel} />
                    <PrivateRoute exact path='/dashboard/recipeSearch' component={RecipeSearch}/>
                </Switch>
                </div>
            </div>
        );
    }
}

export default Dashboard;