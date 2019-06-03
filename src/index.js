import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { BarberProvider } from './contexts/BarberContext'
import { BarberListProvider } from './contexts/BarberListContext'
import App from './Components/App/App';
import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <BarberListProvider>
            <BarberProvider>
                <App />
            </BarberProvider>
        </BarberListProvider>
    </BrowserRouter>
    , document.getElementById('root'));
