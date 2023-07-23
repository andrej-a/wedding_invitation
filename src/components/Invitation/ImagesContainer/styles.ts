import styled from 'styled-components';

export const ImagesContainer = styled.div`
    position: relative;

    width: 50%;
    height: auto;
    display: flex;
    justify-content: flex-start;
`;

export const MainImageContainer = styled.div`
    width: 400px;
    height: 450px;
`;

export const SecondImageContainer = styled.div`
    width: 350px;
    height: 200px;

    position: absolute;
    z-index: 1;
    top: 70%;
    right: 10%;
`;

export const InitialsContainer = styled.div`
    position: absolute;
    top: 55%;
    right: 10%;

    font-size: 24vw;
    color: #00000033;
    font-family: 'Preview';
`;
