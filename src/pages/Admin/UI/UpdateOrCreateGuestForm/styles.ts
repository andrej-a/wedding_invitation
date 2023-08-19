import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 50px;

    background-color: #fff;
`;

export const Form = styled.form`
    min-width: 500px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const InputContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    gap: 10px;
`;

export const InputDescription = styled.p`
    color: #000;
    font-size: 12px;
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 300;
`;

export const RadioLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: #000;
    font-size: 16px;
    font-family: 'Open Sans', Arial, sans-serif;
    cursor: pointer;
`;

export const Input = styled.input`
    width: 100%;
    padding: 5px;

    border: 0;
    border-bottom: 1px solid #000;
    color: #000;
    font-size: 16px;
    font-family: 'Open Sans', Arial, sans-serif;
    outline: none;

    &[type='radio'] {
        //margin-top: 20px;
    }
`;

export const ManageButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
`;
