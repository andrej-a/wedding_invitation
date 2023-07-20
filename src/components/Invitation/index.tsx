import React, { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import { stringConstants } from '../types/constants';
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
    useIntersectionObserver([acceptButtonRef, rejectButtonRef]);

    return (
        <InvitationContainer>
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
                    onClick={() => alert('Тут будет анкета для гостя')}
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
