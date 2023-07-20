import styled from 'styled-components';

export const ImagesContainer = styled.div`
    position: relative;

    width: auto;
    height: auto;
`;

export const MainImageContainer = styled.div`
    width: 500px;
    height: 565px;
`;

export const SecondImageContainer = styled.div`
    position: absolute;
    z-index: 1;
    top: 70%;
    right: -30%;
`;

export const InitialsContainer = styled.div`
    position: absolute;
    top: 55%;
    right: -40%;

    font-size: 27vw;
    color: #00000033;
    font-family: 'Preview';
`;
