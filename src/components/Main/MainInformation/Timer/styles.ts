import styled from 'styled-components';
import size from '@/components/types/sizes';

const { mobileL, desktopL } = size;

export const TimerContainer = styled.div`
    padding: 5px;
`;

export const TimerComponent = styled.p`
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 3px;
    font-family: 'Open Sans', Arial, sans-serif;

    @media (max-width: ${mobileL}px) {
        font-size: 13px;
    }

    @media (min-width: ${desktopL}px) {
        font-size: 1vw;
    }
`;
