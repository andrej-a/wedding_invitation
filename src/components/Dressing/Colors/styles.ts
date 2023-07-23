import styled from 'styled-components';

export const ColorsContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 20px;
    margin-top: 30px;
    margin-bottom: 50px;
`;

export const ColorCard = styled.div<{ color: string }>`
    width: 70px;
    height: 70px;
    background-color: ${({ color }) => color};
`;
