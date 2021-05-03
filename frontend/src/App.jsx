// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
// Project files
import Auth from "./services/Auth";
import AuthPage from "./pages/auth/AuthPage";
import HomePage from "./pages/home.jsx";
import PostPage from "./pages/post.jsx";
import ProfilePage from "./pages/profile.jsx";
import SpinnerPage from "./pages/spinner.jsx";
import Navbar from "./components/Navbar.jsx";


export default function App() {
  // State
    /*const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());*/
  // Constants
    /*Auth.bindLoggedInStateSetter(setLoggedIn);*/
  // Components
    /*const loggedInRouter = (*/
    return (
        <BrowserRouter>
            <Navbar onLogout={() => Auth.logout()} />

            <Switch>
                <Route component={AuthPage} path="/" />
                <Route exact component={HomePage} path="/home" />
                <Route exact component={PostPage} path="/post" />
                <Route exact component={ProfilePage} path="/profile" />
                <Route exact component={SpinnerPage} path="/spinner" />
            </Switch>


        </BrowserRouter>
    ); }


/*  return loggedIn ? loggedInRouter : <AuthPage />;
}*/