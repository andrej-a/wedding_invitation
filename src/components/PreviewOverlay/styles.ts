import styled from 'styled-components';

export const Container = styled.main`
    position: fixed;

    width: 100vw;
    min-height: 100vh;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InitialsContainer = styled.div`
    position: relative;
    right: 15px;

    width: auto;
    height: auto;

    font-family: 'PrimaryFont, sans-serif';
    font-size: 212px;
`;

export const HusbandInitials = styled.p`
    position: relative;
    z-index: 1;
    font-family: 'PrimaryFont, sans-serif';
`;

export const WifeInitials = styled.p`
    top: 0;
    left: 70px;
    position: absolute;
    z-index: 3;
`;
