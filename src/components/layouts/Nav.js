import React, { Component } from 'react'
import { Columns, Navbar } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

function Nav() {

  return (
      <div className="container is-primary">
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://www.letsumai.com/for-restaurants">
                  <span className="is-siz-7 has-text-weight-bold has-text-danger"><strong className="is-size-3  has-text-danger">eazy</strong>.my</span>
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
                <a className="navbar-item">
                  Categories
                </a>
                <a className="navbar-item">
                  Notification
                </a>
                <a className="navbar-item">
                  Login/Sign up
                </a>
                <a className="navbar-item">
                  Help
                </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item has-text-weight-bold">

              </div>
            </div>
            </div>
          </nav>
      </div>
  );
}

export default Nav;
