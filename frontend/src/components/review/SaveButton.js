import React, { Component } from 'react';
import ReactDOM  from 'react-dom';

class SaveButton extends React.Component {
    handleSave(event) {
        console.log(this, event);
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { onClick: this.handleSave.bind(this) },
                "Save"
            )
        );
    }
}

export default SaveButton;