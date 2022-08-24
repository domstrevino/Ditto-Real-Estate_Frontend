import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Contact from './pages/Contact/Contact';
import Testimonials from './pages/Testimonials/Testimonials';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route>
            <Route path = '/' element = { <Dashboard /> } />
            <Route path = '/Contact' element = { <Contact /> } />
            <Route path = '/Testimonials' element = { <Testimonials /> } />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

