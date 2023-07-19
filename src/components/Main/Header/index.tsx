import React from 'react';

import ImageComponent from '../../UI/ImageComponent';
import { HeaderContainer, ImageContainer } from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <ImageContainer>
                <ImageComponent
                    source="../src/assets/img/eternal_love.svg"
                    alt="eternal_love"
                />
            </ImageContainer>
        </HeaderContainer>
    );
};

export default Header;
