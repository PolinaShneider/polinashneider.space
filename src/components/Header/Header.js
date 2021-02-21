import './Header.css';
import React from "react";
import Avatar from "../Avatar/Avatar";
import Bio from "../Bio/Bio";

function Header() {
    return (
        <div className="Header">
            <Avatar/>
            <Bio/>
        </div>
    );
}

export default Header;
