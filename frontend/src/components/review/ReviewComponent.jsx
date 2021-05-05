import React from "react";
import CommentBar from "./CommentBar";
import StarRating from "./StarRating";

export default function ReviewComponent( )
{
    return(
        <div>
            <div className="review-ratings"><h5>MYRATING:</h5><StarRating/>
            </div>
            <div className="Comments"><h5>COMMENTS:</h5>
                <CommentBar/>
            </div>
        </div>


    );
}






