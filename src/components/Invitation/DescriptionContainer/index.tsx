import React, { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { stringConstants } from '@/types/constants';
import dateReverter from '@/utils/dateReverter';

import {
    AppealToGuestContainer,
    AppealToGuestContent,
    DateContainer,
    DateContent,
    DescriptionContent,
    TextContainer,
    TextContent,
} from './styles';
import { useAppSelector } from '@/hooks/useStore';
import getInvitation from '@/utils/getInvitation';

const { INVITATION_TEXT, WEDDING_DATE } = stringConstants;

const DescriptionContainer = () => {
    const dateContainerRef = useRef<HTMLDivElement>(null);
    const { currentGuest } = useAppSelector(store => store.mainSlice);
    useIntersectionObserver([dateContainerRef]);
    return (
        <DescriptionContent>
            <AppealToGuestContainer>
                <AppealToGuestContent>
                    {getInvitation(currentGuest)}, {currentGuest.name}!
                </AppealToGuestContent>
            </AppealToGuestContainer>

            <TextContainer>
                <TextContent>{INVITATION_TEXT}</TextContent>
            </TextContainer>

            <DateContainer ref={dateContainerRef}>
                <DateContent>{dateReverter(WEDDING_DATE)}</DateContent>
            </DateContainer>
        </DescriptionContent>
    );
};

export default DescriptionContainer;
