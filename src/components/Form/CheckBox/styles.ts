import styled from 'styled-components';

export const LabelCheckboxContainer = styled.div`
    display: flex;
    gap: 10px;

    margin-top: 5px;

    cursor: pointer;
`;

export const CheckboxInput = styled.input`
    cursor: pointer;
    position: relative;
    top: rem(-6);

    margin: 0 1rem 0 0;

    cursor: pointer;

    &:before {
        transition: all 0.3s ease-in-out;
        content: '';

        position: absolute;
        left: 0;
        z-index: 1;

        width: 1rem;
        height: 1rem;

        border: 2px solid black;
    }

    &:checked {
        &:before {
            transform: rotate(-45deg);

            height: 0.5rem;

            border-color: $green;
            border-top-style: none;
            border-right-style: none;
        }
    }

    &:after {
        content: '';

        position: absolute;
        top: rem(-2);
        left: 0;

        width: 1.1rem;
        height: 1.1rem;

        background: #fff;

        cursor: pointer;
    }
`;

export const CheckBoxLabel = styled.label`
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 14px;
    font-weight: 100;

    opacity: 0.6;
    cursor: pointer;

    position: relative;

    margin: 0.5rem;

    font-family: Arial, sans-serif;
    line-height: 135%;

    cursor: pointer;
`;
