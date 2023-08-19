import React, { memo } from 'react';

import deleteEvent from '@/api/eventsAPI/deleteEvent';
import getAllEvents from '@/api/eventsAPI/getAllEvents';
import deleteGuest from '@/api/guestsAPI/deleteGuest';
import getAllGuests from '@/api/guestsAPI/getAllGuests';
import DefaultButton from '@/components/UI/DefaultButton';
import { useAppDispatch } from '@/hooks/useStore';
import {
    setEvents,
    setGuests,
    setShowUserModalForm,
} from '@/store/slices/main';
import { adminPannelConstants, stringConstants } from '@/types/constants';
import { IDeleteItemFormProps } from '@/types/modalInterfaces';

import {
    ButtonsContainer,
    ConfirmMessage,
    FormContainer,
    TextContainer,
} from './styles';

const { CONFIRM_DELETION_MESSAGE } = adminPannelConstants;
const { CANCEL_BUTTON_VALUE, SUBMIT_BUTTON_VALUE } = stringConstants;

const DeleteForm = memo(({ _id, type, description }: IDeleteItemFormProps) => {
    const dispatch = useAppDispatch();

    return (
        <FormContainer>
            <TextContainer>
                <ConfirmMessage>
                    {CONFIRM_DELETION_MESSAGE}
                    <strong> {description}</strong>?
                </ConfirmMessage>
            </TextContainer>

            <ButtonsContainer>
                <DefaultButton
                    onClick={() => {
                        dispatch(setShowUserModalForm(false));
                    }}
                >
                    {CANCEL_BUTTON_VALUE}
                </DefaultButton>
                <DefaultButton
                    onClick={() => {
                        if (type === 'events') {
                            deleteEvent(_id).then(status => {
                                if (status) {
                                    getAllEvents().then(events =>
                                        dispatch(setEvents(events)),
                                    );
                                }
                            });
                            dispatch(setShowUserModalForm(false));
                        } else {
                            deleteGuest(_id).then(status => {
                                if (status) {
                                    getAllGuests().then(guests =>
                                        dispatch(setGuests(guests)),
                                    );
                                }
                                dispatch(setShowUserModalForm(false));
                            });
                        }
                    }}
                >
                    {SUBMIT_BUTTON_VALUE}
                </DefaultButton>
            </ButtonsContainer>
        </FormContainer>
    );
});

export default DeleteForm;
