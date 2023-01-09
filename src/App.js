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
  pageSize = 12;
  coutry = "in";
  render() {
    return (
      <>
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <NewsFeed key = "/general" page_size={this.pageSize} country = {this.country} category = {"general"} />
            </Route>
            <Route exact path="/business">
              <NewsFeed key = "business" pageSize={this.pageSize} country = {this.country} category = {"business"} />
            </Route>
            <Route exact path="/entertainment">
              <NewsFeed key = "entertainment" pageSize={this.pageSize} country = {this.country} category = {"entertainment"} />
            </Route>
            <Route exact path="/health">
              <NewsFeed key = "health" pageSize={this.pageSize} country = {this.country} category = {"health"} />
            </Route>
            <Route exact path="/science">
              <NewsFeed key = "science" pageSize={this.pageSize} country = {this.country} category = {"science"} />
            </Route>
            <Route exact path="/sports">
              <NewsFeed key = "sports" pageSize={this.pageSize} country = {this.country} category = {"sports"} />
            </Route>
            <Route exact path="/technology">
              <NewsFeed key = "technology" pageSize={this.pageSize} country = {this.country} category = {"technology"} />
            </Route>
          </Switch>
        </Router>

        
      </>
    );
  }
}
