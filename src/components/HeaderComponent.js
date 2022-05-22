import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";
import {NavLink, Link} from "react-router-dom";
class Headers extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

toggleNav(){
  this.setState({ 
    isNavOpen: !this.state.isNavOpen
  })
}

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler  onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png"
               height="30" width="41"
                alt="Ristorante Con Fusion" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar >

            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <Link to="/home" >
                <NavLink className="nav-link" to="/department">
                  <span className="fa fa-list fa-lg"></span> Department
                </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/payroll">
                  <span className="fa fa-list fa-lg"></span> Payroll
                </NavLink>
              </NavItem>
            </Nav>
            </Collapse>

          </div>
        </Navbar>
       
      </React.Fragment>
    );
  }
}
export default Headers;