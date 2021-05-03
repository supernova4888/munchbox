import React from "react";

export default function ReviewCard({ review, onDeleteClick }) {
    return (
        <div className="card">
            <div className="card-body">
                <p>{comment.body}</p>

                <button className="btn btn-danger" onClick={onDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}