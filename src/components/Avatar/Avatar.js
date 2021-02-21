import './Avatar.css';
import React from "react";
import PHOTO_URL from '../../assets/icons/avatar.jpg';

const INSTA_LINK = 'https://www.instagram.com/polina_shneider/';

function Avatar() {
    return (
        <a className="Avatar" href={INSTA_LINK}>
            <div className="photo has-story">
                <img
                    src={PHOTO_URL}
                    alt="Follow me"/>
            </div>
            <h2 className="nickname">
                polina_shneider
            </h2>
        </a>
    );
}

export default Avatar;
