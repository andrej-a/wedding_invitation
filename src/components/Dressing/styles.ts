import styled from 'styled-components';

import size from '../types/sizes';

const { tablet } = size;

export const DressContainer = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 20px 40px 20px;

    background-color: #f4f4f4;

    @media (max-width: ${tablet}px) {
        padding: 40px 20px 20px 20px;
    }
`;

export const TextContainer = styled.div`
    padding: 5px;
    text-align: center;
`;

export const DressTitle = styled.p`
    font-family: 'Romanus';
    font-size: 58px;
    font-weight: 100;
    letter-spacing: 3px;
    text-transform: capitalize;
`;

export const DressDescription = styled.p`
    width: auto;
    max-width: 500px;

    line-height: 25px;
    white-space: pre-line;
    color: #000;
    font-size: 16px;
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 100;

    opacity: 0.6;
`;
