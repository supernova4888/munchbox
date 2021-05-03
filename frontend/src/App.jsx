// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
// Project files
import HomePage from "./pages/home";
import PostPage from "./pages/RecipePost/recipePost";
import ProfilePage from "./pages/profile";

export default function App() {
  // State

  // Constants

  // Methods

  return (
    <div className="App">
      <header className="App-header">
        <div>
            Hello welcome to MunchBox
            <BrowserRouter>
                <Switch>
                    <Route exact component={HomePage} path="/home" />
                    <Route exact component={PostPage} path="/post" />
                    <Route exact component={ProfilePage} path="/profile" />
                </Switch>
            </BrowserRouter>
        </div>
      </header>
    </div>
  );
}