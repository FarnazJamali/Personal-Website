import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Switch } from "react-router";
import { Route } from "react-router";
import Home from "./components/home";
import Header from "./components/header";
import AboutUs from "./components/aboutUs";
import Posts from "./components/posts";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <Switch>
            <Route path={"/posts"} component={Posts}></Route>
            <Route path={"/about-us"} component={AboutUs}></Route>
            <Route path={"/"} component={Home} exact></Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
