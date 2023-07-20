import styled from 'styled-components';

import size from '@/components/types/sizes';

const { mobileL, desktopL } = size;

export const TimerContainer = styled.div`
    padding: 5px;
`;

export const TimerComponent = styled.p`
    font-size: 20px;
    color: #fff;
    font-weight: 100;
    letter-spacing: 6px;
    font-family: 'Open Sans', Arial, sans-serif;

    @media (max-width: ${mobileL}px) {
        font-size: 15px;
    }

    @media (min-width: ${desktopL}px) {
        font-size: 2vw;
    }
`;
