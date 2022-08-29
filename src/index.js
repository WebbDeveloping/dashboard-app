import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './styles/index.scss';
import './index.css';
import App from './App';
import Reports from "./components/Reports";
import Invoice from './components/invoices/invoice';
import Invoices from "./components/invoices/invoices";
import Products from './pages/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
