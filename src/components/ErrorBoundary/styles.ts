import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    background-color: #f4f4f4;

    overflow: auto;
`;

export const ErrorDescription = styled.p`
    max-width: 500px;
    text-align: center;
    font-family: 'Romanus';
    font-size: 36px;
    font-weight: 300;
`;
