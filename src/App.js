import React from 'react'
import { Button, table, thead, tbody, columns, column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import Flickr from './Flickr-1.4s-200px.svg';
import { Route, Link } from "react-router-dom"
import Nav from './components/layouts/Nav'
import Header from './components/layouts/Header'
import ListPage from './pages/ListPage.js'
import ViewPage from './pages/ViewPage.js'
import axios from 'axios'
import './App.scss'

function App() {
  return (
    <section className="App">
      <Nav />
      <Header />
      <Route exact path="/" component={ListPage} />
      <Route path="/pages/viewpage" component={ViewPage} />
    </section>
  );
}

export default App;
