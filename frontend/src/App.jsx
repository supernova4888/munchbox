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
import LogoutButton from "./components/LogoutButton";
import FollowerPage from "./pages/FollowerPage";
import UserFollowerPage from "./pages/UserFollowerPage";
import NavbarGuest from "./components/NavbarGuest.jsx";
import ReviewPage from "./pages/review/review";



export default function App() {
  // State
    const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  // Constants
    Auth.bindLoggedInStateSetter(setLoggedIn);
  // Components

    const guestRouter = (
        <BrowserRouter>
            <NavbarGuest  />

            <Switch>
                <Route exact component={WelcomePage} path="/" />
                <Route component={HomePage} path="/home" />
                <Route component={PostPage} path="/post" />

                <Route component={SpinnerPage} path="/spinner" />
                <Route component={LoginPage} path="/login" />
                <Route component={RegisterPage} path="/register" />
            </Switch>

        </BrowserRouter>
    );
    const loggedInRouter = (
        <BrowserRouter>
            <Navbar />
            <LogoutButton onLogout={() => Auth.logout()} />
            <Switch>
                    <Route exact component={HomePage} path="/home" />
                <Route exact component={ReviewPage} path="/review/:id" />
                    <Route exact component={PostPage} path="/post" />
                    <Route exact component={ProfilePage} path="/profile" />
                    <Route exact component={SpinnerPage} path="/spinner" />
                    <Route exact component={FollowerPage} path="/profile/follower"/>
                    <Route exact component={UserFollowerPage} path="/profile/follower/youfollow"/>
                </Switch>

        </BrowserRouter>
    );
    return loggedIn ? loggedInRouter : guestRouter;
}