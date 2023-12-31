import styled from 'styled-components';

import size from '../../../types/sizes';

const { mobileL, desktopL } = size;

export const HeaderContainer = styled.header`
    position: relative;
    z-index: 3;

    width: 100vw;
    height: auto;
    min-height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderTitleContainer = styled.div`
    width: auto;
    height: auto;
`;

export const HeaderTitle = styled.h1`
    font-family: 'Romanus';
    font-size: clamp(5vw, 8vw, 55px);
    font-weight: 100;
    letter-spacing: 3px;
    color: #fff;

    @media (min-width: ${desktopL}px) {
        font-size: 10vw;
    }
`;
