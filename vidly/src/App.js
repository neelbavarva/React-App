import React from 'react';
import logo from './logo.svg';
import Movies from './components/movies';
import {Route, Redirect, Switch} from 'react-router-dom';
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from './components/navBar';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
    
     
  );
}

export default App;

