import React from "react";

export default function reviewForm({ onSubmit }) {
    const [body, setBody] = React.useState("");

    const handleSubmit = () => {
        // Invoke the passed in event callback
        onSubmit({ body: body });

        // Clear the input field
        setBody("");
    };

    return (
        <div className="card">
            <div className="card-body">

                <div>
                    <div className="form-group">
            <textarea
                className="form-control"
                placeholder="Write  your comment.."
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary ml-0" onClick={handleSubmit}>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}