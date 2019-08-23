import React, { Suspense, lazy } from 'react';
import { Button, table, thead, tbody, columns, column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import Flickr from './Flickr-1.4s-200px.svg';
import { Route, Link } from "react-router-dom"
import Nav from './components/layouts/Nav'
import axios from 'axios'
import './App.scss'

const ListPage = lazy(() => import('./pages/ListPage'));
const ViewPage = lazy(() => import('./pages/ViewPage'));

function App() {
  return (
    <section className="App">
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={ListPage} />
        <Route path="/pages/viewpage/:id" component={ViewPage} />
      </Suspense>
    </section>
  );
}

export default App;
