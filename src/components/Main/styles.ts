import styled from 'styled-components';

export const MainContainer = styled.div`
    position: relative;

    width: 100vw;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: #00000033;
`;

export const VideoContainer = styled.video`
    position: absolute;
    z-index: 0;

    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;
