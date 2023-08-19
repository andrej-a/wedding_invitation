import React, { useEffect, useState } from 'react';

import getAllEvents from '@/api/eventsAPI/getAllEvents';
import Modal from '@/components/Modal';
import DefaultButton from '@/components/UI/DefaultButton';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { setEvents, setShowUpdateOrCreateModal } from '@/store/slices/main';
import { adminPannelConstants } from '@/types/constants';
import { ICreateOrUpdateModalProps } from '@/types/modalInterfaces';

import TableComponent from '../UI/TableComponent';
import UpdateOrCreateEventForm from '../UI/UpdateOrCreateEventForm';
import { config } from './config/config';
import {
    EventsPanelContsiner,
    EventsPanelTitle,
    TextContainer,
} from './styles';

const { EVENTS_PANNEL_TITLE, CREATE_EVENT_BUTTON_TITLE } = adminPannelConstants;

const EventsPanel = () => {
    const { events, isShowUpdateOrCreateModal } = useAppSelector(
        store => store.mainSlice,
    );
    const dispatch = useAppDispatch();

    const [updatOrCreateModalProps, setUpdatOrCreateModalProp] =
        useState<ICreateOrUpdateModalProps>({
            type: 'update',
            payload: { _id: '', event: '', eventDescription: '', time: '' },
        });

    useEffect(() => {
        getAllEvents().then(events => {
            dispatch(setEvents(events));
        });
    }, []);

    return (
        <>
            <EventsPanelContsiner>
                <TextContainer>
                    <EventsPanelTitle>{EVENTS_PANNEL_TITLE}</EventsPanelTitle>
                </TextContainer>
                {events.length > 0 && (
                    <TableComponent
                        heads={config}
                        bodyContent={events}
                        setUpdatOrCreateModalProp={setUpdatOrCreateModalProp}
                    />
                )}
                <DefaultButton
                    onClick={() => {
                        dispatch(setShowUpdateOrCreateModal(true));
                        setUpdatOrCreateModalProp({
                            ...updatOrCreateModalProps,
                            type: 'create',
                        });
                    }}
                >
                    {CREATE_EVENT_BUTTON_TITLE}
                </DefaultButton>
            </EventsPanelContsiner>

            {isShowUpdateOrCreateModal && (
                <Modal>
                    <UpdateOrCreateEventForm {...updatOrCreateModalProps} />
                </Modal>
            )}
        </>
    );
};

export default EventsPanel;
