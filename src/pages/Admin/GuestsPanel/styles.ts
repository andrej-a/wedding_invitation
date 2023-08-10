import styled from 'styled-components';

export const GuestsPanelContainer = styled.div`
    width: 100vw;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    gap: 20px;

    background-color: #f4f4f4;
`;

export const TextContainer = styled.div`
    padding: 5px;
`;

export const GuestsPanelTitle = styled.h2`
    font-family: 'Romanus';
    font-size: 46px;
    font-weight: 100;
    letter-spacing: 3px;
    text-transform: capitalize;
`;
