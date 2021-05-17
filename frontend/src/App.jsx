// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect  } from "react";


// Project files
import Auth from "./services/Auth";
import WelcomePage from "./pages/auth/AuthPage";
import HomePage from "./pages/home.jsx";
import PostPage from "./pages/PostPage.jsx";
import ProfilePage from "./pages/profile.jsx";
import SpinnerPage from "./pages/spinner.jsx";
import Navbar from "./components/Navbar.jsx";
import RegisterPage from "./pages/registerpage.jsx";
import LoginPage from "./pages/loginpage.jsx";
import LogoutButton from "./components/LogoutButton";
import FollowerPage from "./pages/FollowerPage";
import UserFollowerPage from "./pages/UserFollowerPage";
import NavbarGuest from "./components/NavbarGuest.jsx";
import ReviewPage from "./pages/review";
import SearchResults from "./pages/SearchResults";
import RecipeUpdatePage from "./pages/RecipeUpdatePage";
import MySavedRecipesPage from "./pages/MySavedRecipePage";
import MyPostedRecipes from "./components/MyPostedRecipes";
import UserApi from "./api/UserApi";

export default function App() {
  // State
    const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
    const [user, setUser] = useState([]);
    const [status, setStatus] = useState(0) // 0 is loading, 1 is loaded, 2 error
  // Constants
    Auth.bindLoggedInStateSetter(setLoggedIn);

    useEffect(() => {
        UserApi.getCurrentUser()
                .then(({data}) => {
                    setUser(data)
                    setStatus(1)
                })
                .catch((err) => console.error(err));
        }, [setStatus,setUser]);
        
  // Components

    const guestRouter = (
        <BrowserRouter>
            <NavbarGuest  />
            <Switch>
                <Route exact component={WelcomePage} path="/" />
                <Route component={HomePage} path="/home" />
                <Route component={PostPage} path="/post" />
                <Route component={SpinnerPage} path="/spinner" />
                <Route component={SearchResults} path="/results/:query" />
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
                    <Route exact component={MySavedRecipesPage} path="/MySavedRecipePage"/>
                    <Route exact component={PostPage} path="/post" />
                    <Route exact component={ProfilePage} path="/profile" />
                    <Route component={SearchResults} path="/results/:query" />
                    <Route exact component={SpinnerPage} path="/spinner" />
                    <Route exact component={FollowerPage} path="/profile/follower"/>
                    <Route exact component={RecipeUpdatePage} path="/review/:id/update" />
                    <Route exact component={UserFollowerPage} path="/profile/youfollow"/>                  
                        {status === 1 && <MyPostedRecipes user={user}/>}
                        {status === 0 && <p>Loading recipes...</p>}
                </Switch>
        </BrowserRouter>
    );
    return loggedIn ? loggedInRouter : guestRouter;
}