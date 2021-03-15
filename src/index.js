import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import MyTitle from './Components/2.1/MyTitle';
import Interpolation from './Components/2.2/Interpolation';
import Boxes from './Components/3.1/Boxes';
import Quiz from './Components/3.2/Quiz';
import ButtonsContainer from './Components/4.1/ButtonsContainer';
// import CardsContainer from './Components/4.2/CardsContainer';
import CardsContainer from './Components/6.1/CardsContainer';
import Counter from './Components/7.1/Counter.component';
import FuncCounter from './Components/7.1/FuncCounter.component copy';
import HideNSeek from './Components/7.2/HideNSeek.component';
import FuncHideNSeek from './Components/7.2/FuncHideNSeek.component';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyTitle/> */}
    {/* <Interpolation/> */}
    {/* <Boxes/> */}
    {/* <Quiz/> */}
    {/* <ButtonsContainer/> */}
    {/* <CardsContainer/> */}
    {/* <Counter /> */}
    {/* <FuncCounter/> */}
    {/* <HideNSeek/> */}
    <FuncHideNSeek />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
