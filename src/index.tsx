import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';


import './index.less'
import Header from './components/Header';
import ScrollTip from './components/scrollTip';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header/>
    <Home />       
    <ScrollTip/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
