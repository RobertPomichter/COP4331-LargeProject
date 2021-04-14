import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './MainRouter';
import axios from 'axios';

class Footer extends Component {
  render() {
    return <footer classname="footer">
        <Container fluid>
            <Nav>
                <NavItem>

                </NavItem>
            </Nav>
            <div classname="groupinfo">
                {new Date().getFullYear} Group 22 @ {" "}
                <a href="https://cs.ucf.edu/">UCF</a>{" "}
            </div>
        </Container>
        </footer>
    }
}

export default Footer