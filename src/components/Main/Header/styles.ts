import styled from 'styled-components';

import size from '../../types/sizes';

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
    font-size: 95px;
    color: #fff;
    font-family: 'Romanus';

    @media (max-width: ${mobileL}px) {
        font-size: 55px;
    }

    @media (min-width: ${desktopL}px) {
        font-size: 10vw;
    }
`;
