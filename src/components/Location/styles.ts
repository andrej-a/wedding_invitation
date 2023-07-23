import styled from 'styled-components';

export const LocationContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f4f4f4;
    background-image: url('../src/assets/img/location_img.jpg');
    background-size: cover;
    background-position: center;
`;

export const LocationContentContainer = styled.div`
    width: auto;
    height: auto;
    min-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    padding: 40px 60px;

    background-color: #fff;
`;

export const LocationTitleContainer = styled.div`
    padding: 5px;
`;

export const LocationTitle = styled.p`
    font-family: 'Romanus';
    font-size: 58px;
    font-weight: 100;
    letter-spacing: 3px;
    text-transform: capitalize;

    &::after {
        content: '';
        display: block;
        width: 50px;
        height: 2px;
        background-color: black;
        margin: 0 auto;
        margin-top: 40px;
    }
`;

export const LocationDescriptionContainer = styled.div`
    padding: 5px;
    text-align: center;
    opacity: 0.7;
    font-weight: 100;
`;

export const LocationDescription = styled.p`
    max-width: 620px;

    line-height: 25px;
    white-space: pre-line;
    color: #000;
    font-size: 16px;
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 100;
`;
