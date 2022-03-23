import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Header from './Components/Header/HeaderComponent'
import App from './App'
import Overlay from './Components/UI/Overlay'
import MenuLeft from './Components/Main/MenuLeft'

const isLoggedIn=true; //aktywne logowanie

ReactDOM.render(<Header userLoggedIn={isLoggedIn}  />,document.getElementById('header'));
ReactDOM.render(<App userLoggedIn={isLoggedIn} />,document.getElementById('mainSection'));
ReactDOM.render(<Overlay userLoggedIn={isLoggedIn} />,document.getElementById('overlay'));
ReactDOM.render(<MenuLeft  userLoggedIn={isLoggedIn}/>,document.getElementById('menuLeft'));
