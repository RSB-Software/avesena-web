import React from "react";
import { connect } from 'react-redux';
import { userActions,alertActions } from '../../_actions';
import { Grid,Card, Typography } from "@mui/material";
import { commonStyles } from "../../commonStyle";
import { withStyles } from '@mui/styles';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PaidIcon from '@mui/icons-material/Paid';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import BarChartIcon from '@mui/icons-material/BarChart';
import HelpIcon from '@mui/icons-material/Help';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import SchoolIcon from '@mui/icons-material/School';

class LoggedInMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        'userdata':JSON.parse(localStorage.getItem('user'))
    }
    this.logoutFunction = this.logoutFunction.bind(this);
  }
  logoutFunction(){
      this.props.logout();
      setTimeout(function(){
        window.location.href="/login";
    },2000);
  }
  render() {
    const { classes } = this.props;
    const { userdata } = this.state;
    
    const createMenuItem = (<span><AddIcon fontSize="small" className={classes.menuIcoPad} />Create</span>);
    const trainingMenuItem = (<span><SchoolIcon fontSize="small" className={classes.menuIcoPad} />Training</span>);
    const assesmentMenuItem = (<span><FeaturedPlayListIcon fontSize="small" className={classes.menuIcoPad} />Assessment</span>);
    const myaccountMenuItem = (<span><AccountCircleIcon fontSize="small" className={classes.menuIcoPad} />Welcome {userdata.userName}</span>);
    return (
        <div>
          <Grid container>
              <Grid item xs={2} className={classes.logoImage}>
                  <a href="/home">
                      <img src="assets/img/logo.png" alt="image" />
                  </a>
              </Grid>
              <Grid item xs={10}>
                  <Grid className={classes.userHeaderBar}>Avesena Home Heathcare Inc
                        <NavDropdown className={classes.myAcntMenuItems} href="#" title={myaccountMenuItem}>
                            <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={this.logoutFunction}>Logout</NavDropdown.Item>
                        </NavDropdown>
                  </Grid>
                  <Grid className={classes.userHeaderMenu}>
                      <Navbar expand="lg" sticky="top">
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className={classes.menuItems}>          
                                  <Nav.Link className={classes.menuItems} href="/dashboard"><HomeIcon fontSize="small" className={classes.menuIcoPad}/>Home</Nav.Link>
                                  <NavDropdown className={classes.menuItems} href="#" title={trainingMenuItem}>
                                      <NavDropdown.Item href="#">In Service Training</NavDropdown.Item>
                                      <NavDropdown.Item href="#">Pre Employment Training</NavDropdown.Item>
                                  </NavDropdown>
                                  <NavDropdown className={classes.menuItems} href="#" title={assesmentMenuItem}>
                                      <NavDropdown.Item href="#">In Service Assessment</NavDropdown.Item>
                                      <NavDropdown.Item href="#">Pre Employment Assessment</NavDropdown.Item>
                                  </NavDropdown>
                                  <Nav.Link className={classes.menuItems} href="/"><PersonIcon fontSize="small" className={classes.menuIcoPad}/>Patients</Nav.Link>
                                  <Nav.Link className={classes.menuItems} href="/"><EventNoteIcon fontSize="small" className={classes.menuIcoPad}/>Schedule</Nav.Link>
                                  <Nav.Link className={classes.menuItems} href="/"><FavoriteIcon fontSize="small" className={classes.menuIcoPad}/>AxxessCARE</Nav.Link>
                                  <Nav.Link className={classes.menuItems} href="/"><PeopleIcon fontSize="small" className={classes.menuIcoPad}/>People</Nav.Link>
                                  <Nav.Link className={classes.menuItems} href="/"><BarChartIcon fontSize="small" className={classes.menuIcoPad}/>Reports</Nav.Link>
                                  <Nav.Link className={classes.menuItems} href="/"><HelpIcon fontSize="small" className={classes.menuIcoPad}/>Help</Nav.Link>
                              </Nav>
                          </Navbar.Collapse>
                      </Navbar>
                  </Grid>
              </Grid>
          </Grid>
        </div>
      ) ;
    }
  }

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { state, loggingIn };
}

const actionCreators = {
    logout: userActions.logout
};

export default connect(mapState, actionCreators)(withStyles(commonStyles)(LoggedInMenu));