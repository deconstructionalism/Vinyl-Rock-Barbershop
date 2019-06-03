import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { BarberListProvider } from './contexts/BarberListContext'
import App from './Components/App/App';
import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <BarberListProvider>
                <App />            
        </BarberListProvider>
    </BrowserRouter>
    , document.getElementById('root'));
