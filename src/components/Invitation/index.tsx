import React, { useEffect, useRef } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import {
    setCurrentGuest,
    setScrollToCoordinates,
    setShowUserModalForm,
} from '@/store/slices/main';

import { stringConstants } from '../../types/constants';
import Form from '../Form';
import Modal from '../Modal';
import DefaultButton from '../UI/DefaultButton';
import DescriptionContainer from './DescriptionContainer';
import ImagesContent from './ImagesContainer';
import {
    FormTriggerContainer,
    InvitationContainer,
    InvitationContent,
} from './styles';
import updateGuest from '@/api/guestsAPI/updateGuest';
import getGuestByID from '@/api/guestsAPI/getGuestByID';
import { IGuest } from '@/types/IGuest';
import { getButtonValue } from '@/utils/getInvitation';
import useGuests from '@/hooks/useGuests';

const { ACCEPT_INVITATION, REDJECT_INVITATION } = stringConstants;

const Invitation = () => {
    const { isShowUserModalForm, currentGuest } = useAppSelector(
        store => store.mainSlice,
    );
    const acceptButtonRef = useRef<HTMLButtonElement>(null);
    const rejectButtonRef = useRef<HTMLButtonElement>(null);
    const targetElement = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const { refuseInvitation } = useGuests();
    useIntersectionObserver([acceptButtonRef, rejectButtonRef]);

    useEffect(() => {
        const onHandleCoordinates = () => {
            dispatch(
                setScrollToCoordinates(
                    targetElement.current!.getBoundingClientRect().top +
                        window.scrollY,
                ),
            );
        };

        onHandleCoordinates();
        window.addEventListener('resize', onHandleCoordinates);

        return () => {
            window.addEventListener('resize', () => {
                onHandleCoordinates;
            });
        };
    }, []);

    return (
        <InvitationContainer ref={targetElement}>
            <InvitationContent>
                <DescriptionContainer />
                <ImagesContent />
            </InvitationContent>
            <FormTriggerContainer>
                {currentGuest.status !== 'canceled' && (
                    <DefaultButton
                        onClick={refuseInvitation}
                        ref={acceptButtonRef}
                        style={{ opacity: 0, transition: 'all 2s ease' }}
                    >
                        {REDJECT_INVITATION}
                    </DefaultButton>
                )}
                <DefaultButton
                    onClick={() => {
                        dispatch(setShowUserModalForm(true));
                    }}
                    ref={rejectButtonRef}
                    style={{ opacity: 0, transition: 'all 2s ease' }}
                >
                    {getButtonValue(currentGuest.status)}
                </DefaultButton>
            </FormTriggerContainer>

            {isShowUserModalForm && (
                <Modal>
                    <Form />
                </Modal>
            )}
        </InvitationContainer>
    );
};

export default Invitation;
