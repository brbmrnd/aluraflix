import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaBase from './pages/DefaultPage';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import NaoEncontrada from './pages/NotFound';
import AboutVideoPage from 'pages/AboutVideoPage';

function AppRoutes() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<PaginaBase />}>
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