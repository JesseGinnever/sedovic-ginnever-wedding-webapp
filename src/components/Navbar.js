import React, { Component } from 'react';
import '../App.css';
import {Panel} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import { Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap';


class WeddingNavbar extends Component {
  render() {
    return (
      <div className="WeddingNavbar">
        <Navbar inverse fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Sedovic-Ginnever Wedding</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                    About Us
                </NavItem>
                <NavItem eventKey={4} href="#">
                  Venue
                </NavItem>
                <NavDropdown eventKey={4} title="Preferences" id="basic-nav-dropdown">
                  <MenuItem eventKey={4.1}>Food</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={4.2}>Drinks</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={4.3}>Music</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={4.4}>Games</MenuItem>
                </NavDropdown>
                <NavItem eventKey={1} href="#">
                  About Us
                </NavItem>
                <NavItem eventKey={3} href="#">
                  Contact Us
                </NavItem>
              </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
      );
  }
}

export default WeddingNavbar;