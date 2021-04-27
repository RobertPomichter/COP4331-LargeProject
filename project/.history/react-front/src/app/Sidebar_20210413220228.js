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

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }

    componentDidMount() {
        this.onRouteChanged();
        // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
        const body = document.querySelector('body');
        document.querySelectorAll('.sidebar .nav-item').forEach((element) => {
          
          element.addEventListener('mouseover', function() {
            if(body.classList.contains('sidebar-icon-only')) {
              element.classList.add('hover-open');
            }
          });
          element.addEventListener('mouseout', function() {
            if(body.classList.contains('sidebar-icon-only')) {
              element.classList.remove('hover-open');
            }
          });
        });
    }

    onRouteChanged() {
        document.querySelector('#sidebar').classList.remove('active');
        Object.keys(this.state).forEach(i => {
          this.setState({[i]: false});
        });
        
        const dropdown = [

        ];

        dropdown.forEach((obj => {
            if (this.isPathActive(obj.path)) {
              this.setState({[obj.state] : true})
            }
          }));
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
                            <span className="font-weight-bold mb-2">user.name</span>
                            <span className="text-secondary text-small">user.email</span>
                        </div>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;