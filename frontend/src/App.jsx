// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
// Project files
import HomePage from "./pages/home.jsx";
import PostPage from "./pages/post.jsx";
import ProfilePage from "./pages/profile.jsx";
import SpinnerPage from "./pages/spinner.jsx";
import Navbar from "./components/Navbar.jsx";
import ReviewPage from "./pages/review/review";




export default function App() {
  // State

  // Constants

  // Methods

  return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact component={HomePage} path="/home" />
                    <Route exact component={ReviewPage} path="/review" />
                    <Route exact component={PostPage} path="/post" />

                    <Route exact component={ProfilePage} path="/profile" />
                    <Route exact component={SpinnerPage} path="/spinner" />
                </Switch>

                <Navbar />
            </BrowserRouter>
        </div>
  );
}