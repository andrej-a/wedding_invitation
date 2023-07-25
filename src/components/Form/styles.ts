import styled from 'styled-components';

import size from '@/types/sizes';

export const { mobileXL } = size;
export const FormContainer = styled.div`
    position: relative;

    width: auto;
    height: auto;
    max-height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 30px;

    background-color: #fff;
`;

export const TextContainer = styled.div`
    padding: 5px;
    text-align: center;
`;

export const FormTitle = styled.p`
    font-family: 'Romanus';
    font-size: 58px;
    font-weight: 100;
    letter-spacing: 3px;
    text-transform: capitalize;
`;

export const DescriptionForm = styled.p`
    width: 100vw;
    max-width: 500px;

    line-height: 25px;
    white-space: pre-line;
    color: #000;
    font-size: 16px;
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 100;
`;

export const FormComponent = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    overflow: auto;
`;

export const InputFieldContainer = styled.div`
    position: relative;
    right: -10px;
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 40px;
`;

export const InputTitle = styled(DescriptionForm)`
    width: auto;
    font-size: 18px;

    opacity: 0.6;
`;

export const InputLabel = styled.label`
    color: #000;
    font-size: 12px;
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 100;

    margin-bottom: 20px;
`;

export const NameInput = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
    font-size: 18px;
    font-family: 'Open Sans', Arial, sans-serif;

    outline: none;
`;

export const CloseModalButton = styled.button`
    position: absolute;
    top: 0;
    right: 3%;

    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: transparent;
    border: 0;

    font-size: 32px;
    color: #000;

    cursor: pointer;

    @media (max-width: ${mobileXL}px) {
        right: 7%;
    }
`;
