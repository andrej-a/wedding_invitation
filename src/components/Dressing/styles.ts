import styled from 'styled-components';

export const DressContainer = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 20px;

    background-color: #f4f4f4;
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
    max-width: 800px;

    color: #000;
    font-size: 32px;
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 300;

    opacity: 0.6;
`;
