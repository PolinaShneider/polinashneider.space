import React, {useEffect, useState} from "react";
import './Bio.css';

function Bio() {
    useEffect(() => {
        const timeoutID = setInterval(() =>
            document.querySelector('.show-more').classList.toggle('active'), 1000);
        return () => clearInterval(timeoutID);
    }, []);
    const [hidden, setHidden] = useState(true);

    return (
        <div className="Bio">
            <p className="show-more" onClick={() => {
                setHidden(!hidden);
            }}>ʟᴇᴛ ʏᴏᴜʀ ꜱᴛᴏʀʏ ʙᴇɢɪɴ</p>
            <div className="about" hidden={hidden}>
                <p>
                    Учусь на программиста: СПб Политех 🤓<br/>
                    Пилю фронтенд (и не только): Яндекс 🔥<br/>
                    Преподаю: Codabra | Digital Banana 🍌<br/>
                    Менторю: HTML Academy 😇<br/>
                </p>
                <p>
                    <a href="https://github.com/PolinaShneider" name="button1" onClick="dataLayer.push({'event': 'button1-click'});">GitHub</a> ♥
                    <a href="https://www.linkedin.com/in/natalya-shurygina/"> LinkedIn</a> ♥
                    <a href="https://github.com/PolinaShneider"> Telegram</a>
                </p>
            </div>
        </div>
    );
}

export default Bio;
