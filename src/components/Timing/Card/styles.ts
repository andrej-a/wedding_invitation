import styled from 'styled-components';

import size from '@/types/sizes';

const { mobileXL } = size;

export const EventCardContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const TextContainer = styled.div`
    padding: 5px;
`;

export const TimeContainer = styled.p`
    font-family: 'Romanus';
    font-size: 48px;
`;

export const EventContainer = styled(TimeContainer)`
    font-size: 36px;
    margin-bottom: 20px;

    @media (max-width: ${mobileXL}px) {
        margin-bottom: 0;
    }
`;

export const EventDescription = styled.p`
    width: auto;
    max-width: 210px;

    line-height: 25px;
    color: #000;
    font-size: 16px;
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 100;
    opacity: 0.6;
`;
