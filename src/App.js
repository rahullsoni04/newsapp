import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import NewsFeed from "./components/NewsFeed";

export default class App extends Component {
  x = "Rahul";
  render() {
    return (
      <>
        <NavBar/>
        <NewsFeed page_size={14}/>
        <div>
          {/* <h2>Welcome Alein {this.x}</h2> */}
        </div>
      </>
    );
  }
}
