import React from 'react';

import deleteEvent from '@/api/eventsAPI/deleteEvent';
import getAllEvents from '@/api/eventsAPI/getAllEvents';
import DefaultButton from '@/components/UI/DefaultButton';
import { useAppDispatch } from '@/hooks/useStore';
import { setEvents, setShowModal } from '@/store/slices/main';

import {
    ButtonsContainer,
    ConfirmMessage,
    FormContainer,
    TextContainer,
} from './styles';
import { IManageFormProps } from '@/types/modalInterfaces';
import { adminPannelConstants, stringConstants } from '@/types/constants';

const { CONFIRM_DELETION_MESSAGE } = adminPannelConstants;
const { CANCEL_BUTTON_VALUE, SUBMIT_BUTTON_VALUE } = stringConstants;

const DeleteForm = ({ _id, type, description }: IManageFormProps) => {
    const dispatch = useAppDispatch();
    return (
        <FormContainer>
            <TextContainer>
                <ConfirmMessage>
                    {CONFIRM_DELETION_MESSAGE}
                    <strong>{description}</strong>?
                </ConfirmMessage>
            </TextContainer>

            <ButtonsContainer>
                <DefaultButton
                    onClick={() => {
                        dispatch(setShowModal(false));
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
                            dispatch(setShowModal(false));
                        }
                    }}
                >
                    {SUBMIT_BUTTON_VALUE}
                </DefaultButton>
            </ButtonsContainer>
        </FormContainer>
    );
};

export default DeleteForm;
