// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
// Project files
import Auth from "./services/Auth";
import WelcomePage from "./pages/auth/AuthPage";
import HomePage from "./pages/home.jsx";
import PostPage from "./pages/post.jsx";
import ProfilePage from "./pages/profile.jsx";
import SpinnerPage from "./pages/spinner.jsx";
import Navbar from "./components/Navbar.jsx";
import RegisterPage from "./pages/registerpage.jsx";
import LoginPage from "./pages/loginpage.jsx";


export default function App() {
  // State
    /*const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());*/
  // Constants
    /*Auth.bindLoggedInStateSetter(setLoggedIn);*/
  // Components
    /*const loggedInRouter = (*/
    return (
        <BrowserRouter>
            <Navbar  />

            <Switch>
                <Route component={WelcomePage} path="/welcome" />
                <Route exact component={HomePage} path="/home" />
                <Route component={PostPage} path="/post" />
                <Route component={ProfilePage} path="/profile" />
                <Route component={SpinnerPage} path="/spinner" />
                <Route component={LoginPage} path="/login" />
                <Route component={RegisterPage} path="/register" />
            </Switch>

        </BrowserRouter>
    ); }


/*  return loggedIn ? loggedInRouter : <AuthPage />;
}*/