import styled from 'styled-components';

export const DetailsContainer = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 20px;

    background-color: #00000033;
`;

export const DetailsTitleContainer = styled.div`
    padding: 5px;
    margin-bottom: 40px;
`;

export const DetailsTitle = styled.p`
    font-family: 'Romanus';
    font-size: 72px;
    font-weight: 100;
    letter-spacing: 3px;
    text-transform: capitalize;
`;

export const DetailsInfoContainer = styled.div`
    width: auto;
    max-width: 1200px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
`;