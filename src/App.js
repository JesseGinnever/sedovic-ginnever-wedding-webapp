import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';

//Theme Imports
import { createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

//Theme setup
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

class App extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
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
//                      indicatorColor="primary"
//                      textColor="primary"
                      centered
                    >
                      <Tab label="Item One" />
                      <Tab label="Item Two" />
                      <Tab label="Item Three" />
                    </Tabs>
                    <Button color="inherit">Login</Button>
                  </Toolbar>
                </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
