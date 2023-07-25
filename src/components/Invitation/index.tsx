import React, { useEffect, useRef } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useAppDispatch } from '@/hooks/useStore';
import { setScrollToCoordinates, setShowModal } from '@/store/slices/main';

import { stringConstants } from '../../types/constants';
import DefaultButton from '../UI/DefaultButton';
import DescriptionContainer from './DescriptionContainer';
import ImagesContent from './ImagesContainer';
import {
    FormTriggerContainer,
    InvitationContainer,
    InvitationContent,
} from './styles';

const { ACCEPT_INVITATION, REDJECT_INVITATION } = stringConstants;

const Invitation = () => {
    const acceptButtonRef = useRef<HTMLButtonElement>(null);
    const rejectButtonRef = useRef<HTMLButtonElement>(null);
    const targetElement = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
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
                <DefaultButton
                    onClick={() => alert('Здесь на сервак улетит отказ')}
                    ref={acceptButtonRef}
                    style={{ opacity: 0, transition: 'all 2s ease' }}
                >
                    {REDJECT_INVITATION}
                </DefaultButton>
                <DefaultButton
                    onClick={() => {
                        dispatch(setShowModal(true));
                    }}
                    ref={rejectButtonRef}
                    style={{ opacity: 0, transition: 'all 2s ease' }}
                >
                    {ACCEPT_INVITATION}
                </DefaultButton>
            </FormTriggerContainer>
        </InvitationContainer>
    );
};

export default Invitation;
