import styled, { css } from 'styled-components';

import size from '../types/sizes';

const { mobileS } = size;

export const Container = styled.main<{ componentOpacity: number }>`
    position: fixed;

    width: 100vw;
    min-height: 100vh;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    background-image: url('../src/assets/img/white-texture.jpg');

    ${({ componentOpacity }) => {
        if (!componentOpacity) {
            return css`
                transition: all 2s;
                opacity: 0;
            `;
        }
    }}
`;

export const InitialsContainer = styled.div`
    position: relative;
    right: 60px;

    width: auto;
    height: auto;

    font-family: 'Preview', serif;
    font-size: 350px;

    @media (max-width: ${mobileS}px) {
        font-size: 290px;
    }
`;

export const HusbandInitials = styled.p`
    position: relative;
    z-index: 1;
`;

export const WifeInitials = styled.p`
    top: 0;
    left: 100px;
    position: absolute;
    z-index: 3;
`;
