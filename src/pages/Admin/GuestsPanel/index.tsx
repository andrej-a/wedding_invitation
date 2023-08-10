import React, { useEffect, useState } from 'react';

import getAllGuests from '@/api/guestsAPI/getAllGuests';
import Modal from '@/components/Modal';
import DefaultButton from '@/components/UI/DefaultButton';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import {
    setGuests,
    setShowUpdateOrCreateGuestModal,
} from '@/store/slices/main';
import { adminPannelConstants } from '@/types/constants';
import { ICreateOrUpdateModalProps } from '@/types/modalInterfaces';

import TableComponent from '../UI/TableComponent';
import UpdateOrCreateGuestForm from '../UI/UpdateOrCreateGuestForm';
import config from './config/config';
import {
    GuestsPanelContainer,
    GuestsPanelTitle,
    TextContainer,
} from './styles';

const { GUESTS_PANEL_TITLE, CREATE_GUEST_BUTTON_TITLE } = adminPannelConstants;

const GuestsPanel = () => {
    const { guests, isShowUpdateOrCreateGuestModal } = useAppSelector(
        store => store.mainSlice,
    );
    const dispatch = useAppDispatch();
    const [updatOrCreateModalProps, setUpdatOrCreateModalProp] =
        useState<ICreateOrUpdateModalProps>({
            type: 'create',
            payload: {
                _id: '',
                name: '',
                numberOfGuests: '',
                gender: '',
                drinks: [],
                status: 'not checked',
            },
        });

    useEffect(() => {
        getAllGuests().then(guests => dispatch(setGuests(guests)));
    }, []);

    return (
        <>
            <GuestsPanelContainer>
                <TextContainer>
                    <GuestsPanelTitle>{GUESTS_PANEL_TITLE}</GuestsPanelTitle>
                </TextContainer>
                {guests.length > 0 && (
                    <TableComponent
                        heads={config}
                        bodyContent={guests}
                        setUpdatOrCreateModalProp={setUpdatOrCreateModalProp}
                    />
                )}
                <DefaultButton
                    onClick={() => {
                        setUpdatOrCreateModalProp({
                            ...updatOrCreateModalProps,
                            type: 'create',
                        });

                        dispatch(setShowUpdateOrCreateGuestModal(true));
                    }}
                >
                    {CREATE_GUEST_BUTTON_TITLE}
                </DefaultButton>
            </GuestsPanelContainer>

            {isShowUpdateOrCreateGuestModal && (
                <Modal>
                    <UpdateOrCreateGuestForm {...updatOrCreateModalProps} />
                </Modal>
            )}
        </>
    );
};

export default GuestsPanel;
