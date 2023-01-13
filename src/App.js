import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import NewsFeed from "./components/NewsFeed";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default function App(){

  const pageSize = 12;
  const country = "in";
  const api_key = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(10);

  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <NewsFeed key = "/general" setProgress={setProgress} api_key = {api_key}  page_size={pageSize} country = {country} category = {"general"} />
          </Route>
          <Route exact path="/business">
            <NewsFeed key = "business" setProgress={setProgress} api_key = {api_key}  pageSize={pageSize} country = {country} category = {"business"} />
          </Route>
          <Route exact path="/entertainment">
            <NewsFeed key = "entertainment" setProgress={setProgress} api_key = {api_key}  pageSize={pageSize} country = {country} category = {"entertainment"} />
          </Route>
          <Route exact path="/health">
            <NewsFeed key = "health" setProgress={setProgress} api_key = {api_key}  pageSize={pageSize} country = {country} category = {"health"} />
          </Route>
          <Route exact path="/science">
            <NewsFeed key = "science" setProgress={setProgress} api_key = {api_key}  pageSize={pageSize} country = {country} category = {"science"} />
          </Route>
          <Route exact path="/sports">
            <NewsFeed  key = "sports" setProgress = {setProgress}   api_key = {api_key} pageSize={pageSize} country = {country} category = {"sports"} />
          </Route>
          <Route exact path="/technology">
            <NewsFeed key = "technology" setProgress={setProgress} api_key = {api_key}  pageSize={pageSize} country = {country} category = {"technology"} />
          </Route>
        </Switch>
      </Router>        
    </>
  );
}
