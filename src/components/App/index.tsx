import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AdminPanel from '@/pages/Admin';
import MainPage from '@/pages/Main';

import ErrorBoundary from '../ErrorBoundary';

const App = () => {
    return (
        <ErrorBoundary>
            <Routes>
                <Route path="/:userID" element={<MainPage />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </ErrorBoundary>
    );
};

export default App;
