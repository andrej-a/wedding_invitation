import React from 'react';

import ErrorBoundary from '@/components/ErrorBoundary';
import Modal from '@/components/Modal';
import { useAppSelector } from '@/hooks/useStore';

import EventsPanel from './EventsPanel';
import GuestsPanel from './GuestsPanel';
import DeleteForm from './UI/DeleteForm';

const AdminPanel = () => {
    const { isShowUserModalForm, currentDeletionItem } = useAppSelector(
        state => state.mainSlice,
    );
    return (
        <ErrorBoundary>
            <EventsPanel />
            <GuestsPanel />

            {isShowUserModalForm && (
                <Modal>
                    <DeleteForm {...currentDeletionItem} />
                </Modal>
            )}
        </ErrorBoundary>
    );
};

export default AdminPanel;
