import React from 'react'

export default function PopUp() {
    handleClick = () => {
        this.props.toggle();
    }

    return (
        <div className="modal">
                <div className="modal_content">
                    <span className="close" onClick={this.handleClick}> &times;</span>
                    <p> Recipe added sucessfully! </p>
                </div>
        </div>
    );
}
