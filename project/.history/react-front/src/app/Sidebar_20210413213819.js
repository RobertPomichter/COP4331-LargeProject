import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
class Sidebar extends Component {

    constructor(){
        super();
        this.state = {
            user: "",
            status: "online",
            menuState: true,
            redirectToSignin: false
        };
    }
  
    toggleMenuState(menuState) {
        if (this.state[menuState]) {
        this.setState({[menuState] : false});
        } 
        else if(Object.keys(this.state).length === 0) {
            this.setState({[menuState] : true});
        }
        else {
            Object.keys(this.state).forEach(i => {
                this.setState({[i] : false});
            });
            this.setState({[menuState] : true});
        }
        const dropdown = [

        ];

        dropdown.forEach((obj => {
            if (this.isPathActive(obj.path)) {
              this.setState({[obj.state] : true})
            }
          }));
    }
    render() {
        const { user } = this.state;

        return (
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <a href="!#" className="nav-link" onClick={evt =>evt.preventDefault()}>
                        <div className="nav-profile-image">
                            <img src = { require(user.user_avatar) } alt="profile" />
                            <span className="login-status " status></span>
                        </div>
                        <div className="nav-profile-text">
                            <span className="font-weight-bold mb-2"><Trans>user.name</Trans></span>
                            <span className="text-secondary text-small"><Trans>user.email</Trans></span>
                        </div>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;