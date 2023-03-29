import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import AboutUs from './pages/AboutUs';

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<SignIn />} />
                <Route path="aboutus" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
