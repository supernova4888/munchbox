import React, { useState } from "react";

export default function StarRating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div>
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star"><i className="fas fa-star"></i></span>
                        </button>
                    );
                })}
            </div>
            {/*<p>Your rating is {rating}</p>*/}
        </div>
    );
};

