import React from 'react';
import ReactDOM from 'react-dom/client';

import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';

import Header from './components/Header/Header';

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path = '/' element = { <Dashboard /> } />
                    <Route path = '/Contact' element = { <Contact /> } />
                    <Route path = '/Testimonials' element = { <Testimonials /> } />
                </Routes>
            </BrowserRouter>
    </React.StrictMode>
);