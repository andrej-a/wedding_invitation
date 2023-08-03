import styled from 'styled-components';

export const FormContainer = styled.div`
    width: auto;
    max-width: 500px;
    height: auto;
    padding: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    text-align: center;

    background-color: #fff;
`;

export const TextContainer = styled.div`
    padding: 5px;
`;

export const ConfirmMessage = styled.p`
    color: #000;
    font-size: 16px;
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 300;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;
