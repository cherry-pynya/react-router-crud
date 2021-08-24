import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Menu from "./Menu/Menu";
import Main from "./Main/Main";
import DataProvider from './DataProvider/DataProvider';
import Form from './Form/Form';
import CardPicked from './CardPicked/CardPicked';
import EditCard from './EditCard/EditCard';

const url = "http://localhost:7777/posts";

function App() {
  return (
    <DataProvider url={url}>
      <Router>
        <div className="App">
          <Menu />
          <div className="main">
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/posts/new" render={props => <Form {...props}/>} />
              <Route path="/posts/:id" component={CardPicked} />
              <Route path="/edit/:id" render={props => <EditCard {...props}/>} />
            </Switch>
          </div>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
