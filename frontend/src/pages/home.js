import React from "react";

import logo from "../resources/logo.png";

export default function HomePage() {
return (
    <div>
        <h1>HomePage</h1>
        You are on the home page now. Below, you should see a large logo for testing.
        <img src={logo}/>
    </div>
)
}