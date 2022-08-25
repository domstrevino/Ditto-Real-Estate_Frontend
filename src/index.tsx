import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Contact from './pages/Contact/Contact';
import Testimonials from './pages/Testimonials/Testimonials';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <div className = 'Dashboard-background'>
            <div className = 'Dashboard-overlay'>
                <Container>
                    <Header />
        
                    <BrowserRouter>
                        <Routes>
                            <Route>
                            <Route path = '/' element = { <Dashboard /> } />
                            <Route path = '/Contact' element = { <Contact name={''} email={''} message={''} /> } />
                            <Route path = '/Testimonials' element = { <Testimonials /> } />
                            </Route>
                        </Routes>
                    </BrowserRouter>
            
                </Container>
            </div>
        </div>
    </React.StrictMode>
);

