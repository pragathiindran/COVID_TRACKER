import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import SwipeableTemporaryDrawer from "./drawer";
import { stateFullName } from "./../utils/common-functions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: stateFullName.hasOwnProperty(
        window.location.pathname.toUpperCase()
      )
        ? stateFullName[window.location.pathname.toUpperCase()].toUpperCase()
        : "COVID TRACKER".toUpperCase(),
    };
  }

  changeTitle = (newTitle) => {
    this.setState({
      title: newTitle,
    });
  };

  componentDidMount() {
    this.props.history.listen(() => {
      {
        stateFullName.hasOwnProperty(window.location.pathname.toUpperCase())
          ? this.changeTitle(
              stateFullName[
                window.location.pathname.toUpperCase()
              ].toUpperCase()
            )
          : this.changeTitle("COVID TRACKER");
      }
    });
  }

  render() {
    return (
      <nav className="myNavbar">
        <ul className="myNavbar-nav">
          <SwipeableTemporaryDrawer />
          <ul style={{ flex: 0.54 }} id="line1"></ul>
          <NavLink to="/" className="fadeInLeft">
            <div>
              <span className="title">{this.state.title}</span>
            </div>
          </NavLink>
          <ul style={{ flex: 0.46 }}></ul>
          <ul style={{ flex: 0.54 }} id="line2"></ul>
           </ul>
      </nav>
    );
  }
}

export default withRouter(Navbar);
