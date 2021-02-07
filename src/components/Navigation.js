import React, { Component, Fragment } from "react";
import {connect} from "react-redux";
import { Link , withRouter} from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import User from "./User";

class Navigation extends Component {
    state = {
      isOpen: false
    };
  
    toggle = () =>  {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  
    render() {
      const { userAuth } = this.props;
  
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand tag={Link} to="/">Would You Rather</NavbarBrand>
            {userAuth &&
            <Fragment>
              <NavbarToggler onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/add">New Question</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/leaderboard">LeaderBoard</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/signout'>Signout</NavLink>
                  </NavItem>

                  <NavItem>
                    <User id={userAuth}/>
                  </NavItem>
                </Nav>
              </Collapse>
            </Fragment>
            }
          </Navbar>
        </div>
      );
    }
  }
  
  
  function mapStateToProps ({ userAuth }) {
    return {
        userAuth
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Navigation))