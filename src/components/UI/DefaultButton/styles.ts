import styled from 'styled-components';

export const DefaultButtonWrapper = styled.div`
    width: auto;
    height: auto;
`;

export const DefaultButtonElement = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;

    color: #fff;
    font-size: 16px;
    font-family: 'Open Sans', Arial, sans-serif;
    line-height: 1.55;
    font-weight: 500;
    text-transform: uppercase;
    background-color: #000;
    border: 1px solid #000;

    cursor: pointer;

    &:not(:disabled):hover {
        background: #fff;
        color: #000;
    }

    &:disabled {
        color: #000;
        background: #f4f4f4;
        cursor: not-allowed;
        opacity: 0.5;
    }
`;
