import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import NewsFeed from "./components/NewsFeed";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12;
  coutry = "in";
  state = {
    progress : 10
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <NewsFeed setProgress={this.setProgress} key = "/general" page_size={this.pageSize} country = {this.country} category = {"general"} />
            </Route>
            <Route exact path="/business">
              <NewsFeed setProgress={this.setProgress} key = "business" pageSize={this.pageSize} country = {this.country} category = {"business"} />
            </Route>
            <Route exact path="/entertainment">
              <NewsFeed setProgress={this.setProgress} key = "entertainment" pageSize={this.pageSize} country = {this.country} category = {"entertainment"} />
            </Route>
            <Route exact path="/health">
              <NewsFeed setProgress={this.setProgress} key = "health" pageSize={this.pageSize} country = {this.country} category = {"health"} />
            </Route>
            <Route exact path="/science">
              <NewsFeed setProgress={this.setProgress} key = "science" pageSize={this.pageSize} country = {this.country} category = {"science"} />
            </Route>
            <Route exact path="/sports">
              <NewsFeed setProgress = {this.setProgress} key = "sports" pageSize={this.pageSize} country = {this.country} category = {"sports"} />
            </Route>
            <Route exact path="/technology">
              <NewsFeed setProgress={this.setProgress} key = "technology" pageSize={this.pageSize} country = {this.country} category = {"technology"} />
            </Route>
          </Switch>
        </Router>        
      </>
    );
  }
}
