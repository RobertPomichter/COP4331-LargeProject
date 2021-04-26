import React, { Component } from "react";

class Alert extends Component {
    
    constructor() {
        super();
        this.state = {
            alert : ""
        };
    }
    
    render() {
        const {alert} = this.state;
        return (
            <div classname="alert">
                <h3>{alert}</h3>
            </div>
        );
    }
}

export default Alert;