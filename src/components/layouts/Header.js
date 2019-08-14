import React, { Component } from 'react'
import { Columns, Navbar } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'


const Header = () =>  {
    return (
      <div className=" columns"  id="parentContainer">
        <div className="column" id="floatingElement">
          <h3 className="title is-uppercase has-text-left is-6 has-text-black" id="floatingText">Listings</h3>
        </div>
      </div>
    );
}

export default Header;
