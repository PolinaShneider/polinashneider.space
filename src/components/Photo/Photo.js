import React from "react";
import "./Photo.css";

function Photo({url}) {
    return (
        <div className="Photo">
            <img src={url}/>
        </div>
    );
}

export default Photo;
