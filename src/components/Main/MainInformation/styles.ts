import styled from 'styled-components';

import size from '@/components/types/sizes';

const { tablet, mobileL, desktopL } = size;

export const MainInfoContainer = styled.div`
    position: relative;
    z-index: 1;

    width: 100vw;
    height: auto;
    min-height: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const MainPeopleOnThisEventContainer = styled.div`
    padding: 10px;
`;

export const MainPeopleOnThisEventNames = styled.p`
    font-family: 'Preview', serif;
    color: #f2f3f4;
    font-size: 18vw;

    @media (max-width: ${tablet}px) {
        font-size: 23vw;
    }
`;

export const EventsDateContainer = styled.div`
    padding: 5px;
`;

export const EventsDate = styled.p`
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
