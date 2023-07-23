import styled from 'styled-components';

export const DescriptionContent = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    gap: 30px;
`;

export const AppealToGuestContainer = styled.div`
    padding: 5px;
    width: auto;
    text-align: left;
`;

export const AppealToGuestContent = styled.p`
    font-family: 'Romanus';
    font-size: 57px;
    font-weight: 100;
`;

export const TextContainer = styled(AppealToGuestContainer)`
    max-width: 460px;
`;

export const TextContent = styled.p`
    font-family: 'Open Sans', Arial, sans-serif;
    color: #000000;
    font-size: 16px;
    font-weight: 100;
    line-height: 25px;
`;

export const DateContainer = styled(AppealToGuestContainer)`
    transition: all 2s ease;
    opacity: 0;
`;

export const DateContent = styled(AppealToGuestContent)``;
