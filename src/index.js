import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserHistory as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import AppRouter from './routes';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
