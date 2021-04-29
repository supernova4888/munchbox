import React from "react";

import StarRating from "../components/StarRating";
import logo from "../resources/logo.png";

export default function HomePage() {
return (
    <div>
        <h1>HomePage</h1>
        <p>You are on the home page now. Below you'll see a start rating for testing.</p>
        <StarRating />

    </div>
)
}