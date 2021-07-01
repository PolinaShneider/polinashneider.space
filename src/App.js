import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import PhotoList from "./components/PhotoList/PhotoList";

function App() {
    return (
        <div className="App">
            <Header/>
            <PhotoList/>
        </div>
    );
}

(function () {
    const script = document.createElement('script');
    script.async = true;
    script.innerHTML = `(function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
          'gtm.start':
              new Date().getTime(), event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-TF5QKDQ');`;
    document.head.append(script);

    const bodyScript = document.createElement('noscript');
    bodyScript.async = true;
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-TF5QKDQ";
    iframe.height = 0;
    iframe.width = 0;
    iframe.style = "display:none;visibility:hidden";
    bodyScript.append(iframe);
    document.body.prepend(bodyScript);

    const dataLayerScript = document.createElement('script');
    dataLayerScript.innerHTML = `dataLayer = [{
    'pageCategory': 'signup',
    'visitorType': 'high-value'
  }];`;
    document.body.prepend(dataLayerScript);
})();

export default App;
