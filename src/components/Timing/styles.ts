import styled from 'styled-components';

export const TimingContainer = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px 160px 20px;

    background-color: #f4f4f4;
`;

export const TimingTitleContainer = styled.div`
    padding: 5px;
    margin-bottom: 40px;
`;

export const TimingTitle = styled.p`
    font-family: 'Romanus';
    font-size: 58px;
    font-weight: 100;
    letter-spacing: 3px;
    text-transform: capitalize;
`;

export const TimingInfoContainer = styled.div`
    width: auto;
    max-width: 1200px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 60px;
`;

export const TextContainer = styled.div`
    padding: 5px;
    text-align: center;
`;

export const NoEventsDescription = styled.p`
    width: auto;
    max-width: 800px;

    color: #000;
    font-size: 32px;
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 300;
`;
