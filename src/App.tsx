import React from 'react';
import avatar from './assets/avatar.jpg';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithubAlt, faTelegram, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-logo" alt="logo" />
        <h1 className="App-username">Polina Shneider</h1>
        <p className="App-about">Привет! Меня зовут Полина. Я разработчик в Яндексе и ментор в HTML Academy. Пишу на React. Люблю музыку, алгоритмы и хороший кофе. А ещё у меня есть кошка Ириска!
          Я не знаю, что ещё здесь написать, поэтому просто оставлю ссылочки.
        </p>
        <div className="App-social">
          <a href="https://github.com/PolinaShneider">
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
          <a href="https://t.me/polina_shneider">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://www.instagram.com/polina_shneider/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/Polina_Shneider">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
