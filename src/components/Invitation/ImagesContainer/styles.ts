import styled from 'styled-components';

import size from '@/components/types/sizes';

const { laptop, tablet } = size;

export const ImagesContainer = styled.div`
    position: relative;

    width: 50%;
    height: auto;
    display: flex;
    justify-content: flex-start;

    @media (max-width: ${tablet}px) {
        width: 100vw;
    }

    @media (max-width: ${laptop}px) {
        justify-content: center;
    }
`;

export const MainImageContainer = styled.div`
    width: 400px;
    height: 450px;

    @media (max-width: ${tablet}px) {
        display: none;
    }
`;

export const SecondImageContainer = styled.div`
    width: 350px;
    height: 200px;

    position: absolute;
    z-index: 1;
    top: 70%;
    right: 10%;

    @media (max-width: ${laptop}px) {
        right: -15%;
    }

    @media (max-width: ${tablet}px) {
        position: relative;
        top: 0;
        left: 0;

        margin: 0 auto;
    }
`;

export const InitialsContainer = styled.div`
    position: absolute;
    top: 55%;
    right: 10%;

    font-size: 350px;
    color: #00000033;
    font-family: 'Preview';

    @media (max-width: ${laptop}px) {
        right: -10%;
    }

    @media (max-width: ${tablet}px) {
        top: 0;
        right: 20%;
    }
`;
