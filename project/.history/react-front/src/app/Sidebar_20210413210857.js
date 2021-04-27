import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import { Collapse } from 'react-bootstrap';

class Sidebar extends Component {

    state = {};
  
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
}