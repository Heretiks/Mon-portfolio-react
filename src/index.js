import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './styles/global.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

//reportWebVitals(console.log);
