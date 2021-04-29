// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
// Project files
import HomePage from "./pages/home.jsx";
import PostPage from "./pages/post.jsx";
import ProfilePage from "./pages/profile.jsx";
import SpinnerPage from "./pages/spinner.jsx";
import Navbar from "./components/Navbar.jsx";
import NavbarSide from "./components/NavbarSide";

export default function App() {
  // State

  // Constants

  // Methods

  return (
        <div>
            some text
            <BrowserRouter>
                <Switch>
                    <Route exact component={HomePage} path="/home" />
                    <Route exact component={PostPage} path="/post" />
                    <Route exact component={ProfilePage} path="/profile" />
                    <Route exact component={SpinnerPage} path="/spinner" />
                </Switch>

                <Navbar />
            </BrowserRouter>
        </div>
  );
}