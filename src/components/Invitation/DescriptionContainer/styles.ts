import styled from 'styled-components';

import size from '@/components/types/sizes';

const { laptopX, laptop, mobileL } = size;

export const DescriptionContent = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    gap: 30px;

    @media (max-width: ${laptopX}px) {
        align-items: center;
    }

    @media (max-width: ${laptop}px) {
        width: 100vw;
        gap: 10px;
    }
`;

export const AppealToGuestContainer = styled.div`
    padding: 5px;
    width: auto;
    text-align: left;

    @media (max-width: ${laptopX}px) {
        text-align: center;
        padding: 10px;
    }
`;

export const AppealToGuestContent = styled.p`
    font-family: 'Romanus';
    font-size: 57px;
    font-weight: 100;

    @media (max-width: ${mobileL}px) {
        font-size: 42px;
    }
`;

export const TextContainer = styled(AppealToGuestContainer)`
    max-width: 460px;

    @media (max-width: ${mobileL}px) {
        padding: 10px;
    }
`;

export const TextContent = styled.p`
    font-family: 'Open Sans', Arial, sans-serif;
    color: #000000;
    font-size: 16px;
    font-weight: 100;
    line-height: 25px;

    @media (max-width: ${mobileL}px) {
        font-size: 14px;
    }
`;

export const DateContainer = styled(AppealToGuestContainer)`
    transition: all 2s ease;
    opacity: 0;
`;

export const DateContent = styled(AppealToGuestContent)``;
