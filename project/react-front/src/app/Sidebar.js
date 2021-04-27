import React, { Component } from 'react';
import { Link, withRouter, BrowserRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import DefaultUserAvatar from "../images/user_avatar.png";
import * as faIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";

class Sidebar extends Component {

    constructor(){
        super();
        this.state = {
            user: "",
            status: "online",
            menuState: true,
            redirectToSignin: false,
            sidebar: false
        };
    }

    showSidebar = () => this.setState({sidebar: !this.state.sidebar});

    pathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }

    componentDidMount() {
        this.onRouteChanged();
        // add class 'hover-open' to sidebar navitem
        const body = document.querySelector('body');
        document.querySelectorAll('.sidebar .nav-item').forEach((element) => {
          
          element.addEventListener('mouseover', function() {
            if (body.classList.contains('sidebar-icon-only')) {
                element.classList.add('hover-open');
            }
        });
          element.addEventListener('mouseout', function() {
            if (body.classList.contains('sidebar-icon-only')) {
                element.classList.remove('hover-open');
            }
          });
        });
    }

    render() {
        const { user } = this.state;

        return (
            <>
            <div className="navbar navbar-offcanvas" id="sidebar">
                <Link to="#" classNAme="hamburger-menu">
                    <faIcons.FaBars />
                </Link>
            </div>
            <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <aiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <li>
                         {/* {SidebarItems.map((item, index) => {
                            return (
                                <li key={index} className={item.classname}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            )
                        })} */}
                    </li>
                </ul>
            </nav>
            </>
        );
    }
}

export default Sidebar;