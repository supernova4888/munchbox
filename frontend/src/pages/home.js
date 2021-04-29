import React from "react";

import StarRating from "../components/star-rating";
import logo from "../resources/logo.png";

export default function HomePage() {
return (
    <div>
        <h1>HomePage</h1>
        <p>You are on the home page now. Below you'll see a star rating for testing.</p>
        <StarRating />
    </div>
)
}