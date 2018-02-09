import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button, MenuItem, Nav, NavItem, NavDropdown, Panel, Well, Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Navbar fixedTop collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Sedovic-Ginnever Wedding</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href="#">
                    Link
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    Link
                  </NavItem>
                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                  </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        //Main content
        <div className="Main-content">
            <Col xs={12} md={8}>
                <p className="App-intro">
                    <Well>
                          To get started, edit<code>src/App.js</code> and save to reload.
                    </Well>
                </p>
            </Col>
            <Col xs={6} md={4}>
                <Panel>
                    <Panel.Heading>Panel heading without a title</Panel.Heading>
                    <Panel.Body>Panel content</Panel.Body>
                </Panel>
            </Col>
        </div>
      </div>
    );
  }
}

export default App;
