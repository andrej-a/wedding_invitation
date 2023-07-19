import styled from 'styled-components';

export const MainInfoContainer = styled.div`
    width: 100vw;
    height: auto;
    min-height: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const MainPeopleOnThisEventContainer = styled.div`
    padding: 10px;
`;

export const MainPeopleOnThisEventNames = styled.p`
    font-family: 'Preview', serif;
    color: #f2f3f4;
    font-size: 280px;
`;

export const EventsDateContainer = styled.div`
    padding: 5px;
`;

export const EventsDate = styled.p`
    font-size: 20px;
    color: #fff;
    font-weight: 300;
    letter-spacing: 6px;
    font-family: 'Open Sans', Arial, sans-serif;
`;
