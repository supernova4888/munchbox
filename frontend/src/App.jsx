// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
// Project files
import HomePage from "./pages/home";
import PostPage from "./pages/post";
import ProfilePage from "./pages/profile.jsx";
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
                </Switch>

                <NavbarSide />
            </BrowserRouter>
        </div>
  );
}