import React, { Component } from 'react'
import { Columns, Navbar } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'


const Header = () =>  {
    return (
      <div className="container columns" id="sticky">
        <div className="column">
          <h3 className="title is-uppercase has-text-left is-6 has-text-white">Listings</h3>
        </div>
      </div>
    );
}

export default Header;
