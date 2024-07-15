import React from 'react';
import AppRoutes from './routes.js';
import CategoriesList from './components/CategoriesList';
import VideoList from 'components/VideoList/index.js';
import { VideosProvider } from 'context/VideoContext.js';
import Banner from 'components/Banner/index.js';

function App() {
    return (
        <VideosProvider>
            <div>
                <AppRoutes>
                    <Banner />
                    <CategoriesList />
                    <VideoList />
                </AppRoutes>
            </div>
        </VideosProvider>
    );
}

export default App;