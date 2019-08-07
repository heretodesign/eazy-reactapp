import React from 'react'
import { Button, table, thead, tbody, columns, column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Route, Link } from "react-router-dom"
import Nav from './components/layouts/Nav'
import ListPage from './pages/ListPage.js'

import axios from 'axios'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={ListPage} />

    </div>
  );
}

export default App;
