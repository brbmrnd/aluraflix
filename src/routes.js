import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import NaoEncontrada from './pages/NotFound';
import AboutVideoPage from 'pages/AboutVideo';
import DefaultPage from './pages/DefaultPage';

function AppRoutes() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<DefaultPage />}>
                        <Route index element={<Home />} />
                        <Route path="newVideo" element={<NewVideo />} />
                        <Route path="video/:id" element={<AboutVideoPage />} />
                        <Route path="*" element={<NaoEncontrada />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AppRoutes;