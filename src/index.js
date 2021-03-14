import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyTitle from './Components/2.1/MyTitle';
import Interpolation from './Components/2.2/Interpolation';
import Boxes from './Components/3.1/Boxes'
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyTitle/> */}
    {/* <Interpolation/> */}
    <Boxes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
