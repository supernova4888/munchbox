import React from 'react';

const CommentBar = ({keyword,setKeyword}) => {
    const BarStyling = {width:"15rem",background:"#F2F1F9", border:"black", padding:"1rem"};
    return (
        <input
            style={BarStyling}
            key="random1"
            value={keyword}
            placeholder={"Enter your comments here"}
            onChange={(e) => setKeyword(e.target.value)}
        />
    );
}

export default CommentBar