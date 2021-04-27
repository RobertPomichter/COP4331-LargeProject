import React, { Component } from 'react';
import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "./index";

// functional component is stateless
const PrivateRoute = ({component: Component, ...rest}) => (
    // props means components passed to this private route component
    <Route 
        {...rest} 
        render={props => 
            isAuthenticated() ? (
                <Component {...props}/>
            ) : (
                <Redirect 
                    to={{
                        pathname: "/", // Changed from "/signin"
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;