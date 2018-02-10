import React, { Component } from 'react';
import logo from './logo.svg';
import RSVPPanel from './components/RSVPPanel';
import WeddingNavbar from './components/Navbar';
import './App.css';
import {Well, Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
       <WeddingNavbar />
        //Main content
        <div className="Main-content">
            <Col xs={12} md={8}>
                    <RSVPPanel />
            </Col>
            <Col xs={6} md={4}>
                <Well>
                      To get started, edit<code>src/App.js</code> and save to reload.
                </Well>
            </Col>
        </div>
      </div>
    );
  }
}

export default App;
