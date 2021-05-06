import React from "react";

export default function CommentCard({ comment, onSubmitClick }) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <p>{comment.body}</p>

                <button className="comment-bar" onClick={onSubmitClick}>
                    Comment
                </button>
            </div>
        </div>
    );
}