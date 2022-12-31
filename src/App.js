import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import NewsFeed from "./components/NewsFeed";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default class App extends Component {
  x = "Rahul";
  render() {
    return (
      <>
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <NewsFeed key = "general" page_size={3} country = {"in"} category = {"general"} />
            </Route>
            <Route exact path="/business">
              <NewsFeed key = "business" page_size={3} country = {"in"} category = {"business"} />
            </Route>
            <Route exact path="/entertainment">
              <NewsFeed key = "entertainment" page_size={3} country = {"in"} category = {"entertainment"} />
            </Route>
            <Route exact path="/health">
              <NewsFeed key = "health" page_size={3} country = {"in"} category = {"health"} />
            </Route>
            <Route exact path="/science">
              <NewsFeed key = "science" page_size={3} country = {"in"} category = {"science"} />
            </Route>
            <Route exact path="/sports">
              <NewsFeed key = "sports" page_size={3} country = {"in"} category = {"sports"} />
            </Route>
            <Route exact path="/technology">
              <NewsFeed key = "technology" page_size={3} country = {"in"} category = {"technology"} />
            </Route>
          </Switch>
        </Router>

        
      </>
    );
  }
}
