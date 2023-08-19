import React from 'react';

import videoBg from '../../assets/video/video.mp4';
import Header from './Header';
import MainInfoComponent from './MainInformation';
import NextBlockButton from './NextBlockButton';
import { MainContainer, VideoContainer, VideoOverlay } from './styles';

const Main = () => {
    return (
        <MainContainer>
            <VideoContainer src={videoBg} autoPlay loop muted />
            <VideoOverlay />
            <Header />
            <MainInfoComponent />
            <NextBlockButton />
        </MainContainer>
    );
};

export default Main;
