import React, { Component } from 'react';
import '../App.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Tabs, { Tab } from 'material-ui/Tabs';

class NavBar extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div className="NavBar">
          <AppBar position="static">
              <Toolbar>
                <IconButton className="PropTypes.object.isRequired" color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className="navBarTitle">
                  Sedovic - Ginnever Wedding
                </Typography>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  centered
                >
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
      </div>
    );
  }
}
export default NavBar;
