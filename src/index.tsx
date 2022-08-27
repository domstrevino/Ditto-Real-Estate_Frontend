import React from 'react';
import ReactDOM from 'react-dom/client';

import Dashboard from './pages/Dashboard/Dashboard';
import Contact from './pages/Contact/Contact';
import Testimonials from './pages/Testimonials/Testimonials';
import Header from './components/Header/Header';

import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <div className = 'Background'>
            <div className = 'Overlay'>
                <BrowserRouter>

                    <Container>
                        <Header />
                        <Routes>
                            <Route>
                                <Route path = '/' element = { <Dashboard /> } />
                                <Route path = '/Contact' element = { <Contact /> } />
                                <Route path = '/Testimonials' element = { <Testimonials /> } />
                            </Route>
                        </Routes>
                    </Container>

                </BrowserRouter>
            </div>
        </div>
    </React.StrictMode>
);

