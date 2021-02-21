import React from "react";
import Photo from "../Photo/Photo";
import "./PhotoList.css";

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
};

const importAll = require =>
    require.keys().reduce((acc, next) => {
        acc.push(require(next).default);
        return acc;
    }, []);

const images = shuffleArray(importAll(
    require.context("../../assets/photos/", false, /\.(png|jpe?g)$/i)
));


function PhotoList() {
    return (
        <div className="PhotoList">
            {images.map((src, index) => (<Photo url={src} key={index}/>))}
        </div>
    );
}

export default PhotoList;
