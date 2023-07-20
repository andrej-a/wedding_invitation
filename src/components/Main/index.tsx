import React from 'react';

import Header from './Header';
import MainInfoComponent from './MainInformation';
import NextBlockButton from './NextBlockButton';
import { MainContainer, VideoContainer } from './styles';
import videoBg from '../../assets/video/video.mp4';

const Main = () => {
    return (
        <MainContainer>
            <VideoContainer src={videoBg} autoPlay loop muted />
            <Header />
            <MainInfoComponent />
            <NextBlockButton />
        </MainContainer>
    );
};

export default Main;
