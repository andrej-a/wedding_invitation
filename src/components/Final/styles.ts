import styled from 'styled-components';

export const FinalBlockContainer = styled.div`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #f4f4f4;

    background-image: url('../src/assets/img/final_block.jpg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const TextContainer = styled.div`
    padding: 5px;
`;

export const FinalTitleContainer = styled.p`
    font-family: 'Romanus';
    font-size: 100px;
    font-weight: 100;
    letter-spacing: 3px;
    text-transform: capitalize;

    color: #fff;

    opacity: 0.7;
`;

export const InitialsContainer = styled.div`
    position: relative;
    right: 40px;
    font-size: 270px;
    font-family: 'Preview';
    color: #fff;
`;
