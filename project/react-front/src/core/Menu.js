import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from "../auth";

// helper function to display active links
const isActive= (history, path) => {
    if(history.location.pathname === path){
        return {color: "#ff9900"};
    } else {
        return {color: "#ffffff"};
    }
}

// stateless component Menu is not a class
const Menu = ({history}) => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link className='nav-link' style={isActive(history, '/')} to='/'>
                    Home
                </Link>
            </li>

            {!isAuthenticated() && (
                <>
                    <li className="nav-item">
                        <Link className='nav-link' style={isActive(history, '/signup')} to='/signup'>
                            Register
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' style={isActive(history, '/signin')} to='/signin'>
                            Sign In
                        </Link>
                    </li>
                </>
            )}

            {isAuthenticated() && (
                <>
                    <li className="nav-item">
                        <a className='nav-link' 
                            style={isActive(history, '/signout'),
                            {cursor:'pointer', color:'#fff'}} 
                            onClick={() => signout( () => history.push('/'))}>
                                Sign Out
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link'>
                            {isAuthenticated().user.name}
                        </a>
                    </li>
                </>
            )}
        </ul>
    </div>
);

export default withRouter(Menu);