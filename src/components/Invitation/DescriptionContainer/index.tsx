import React, { useRef } from 'react';

import { stringConstants } from '@/components/types/constants';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
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

const { INVITATION_TEXT, WEDDING_DATE } = stringConstants;

const DescriptionContainer = () => {
    const dateContainerRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver([dateContainerRef]);
    return (
        <DescriptionContent>
            <AppealToGuestContainer>
                <AppealToGuestContent>
                    Дорогие, Данные с Сервера
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
