import React, { useState } from "react";

export default function StarRating(props) {
    const [hover, setHover] = useState(0);

    function changeRating(rating) {
       props.onChangeRating(rating);
    }
    return (
        <div>
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || props.rating) ? "on" : "off"}
                            onClick={() => changeRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(props.rating)}
                        >
                            <span className="star"><i className="fas fa-star"></i></span>
                        </button>
                    );
                })}
            </div>
            <p>Your rating is {props.rating}</p>
        </div>
    );
}

