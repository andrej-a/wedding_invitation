import React from 'react';

import Header from './Header';
import MainInfoComponent from './MainInformation';
import NextBlockButton from './NextBlockButton';
import { MainContainer } from './styles';

const Main = () => {
    return (
        <MainContainer>
            <Header />
            <MainInfoComponent />
            <NextBlockButton />
        </MainContainer>
    );
};

export default Main;
