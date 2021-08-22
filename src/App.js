import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from "./Menu/Menu";
import Main from "./Main/Main";
import DataProvider from './DataProvider/DataProvider';

const url = "http://localhost:7777/posts";

function App() {
  return (
    <DataProvider url={url}>
      <Router>
        <div className="App">
          <Menu />
          <div className="main">
            <Route path="/" exact component={Main} />
          </div>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
