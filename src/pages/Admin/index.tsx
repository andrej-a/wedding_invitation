import React from 'react';

import ErrorBoundary from '@/components/ErrorBoundary';

import EventsPanel from './EventsPanel';

const AdminPanel = () => {
    return (
        <ErrorBoundary>
            <EventsPanel />
        </ErrorBoundary>
    );
};

export default AdminPanel;
