import React from 'react';

import {
    HusbandInitials,
    WifeInitials,
} from '@/components/PreviewOverlay/styles';
import ImageComponent from '@/components/UI/ImageComponent';

import {
    ImagesContainer,
    InitialsContainer,
    MainImageContainer,
    SecondImageContainer,
} from './styles';

const ImagesContent = () => {
    return (
        <ImagesContainer>
            <MainImageContainer>
                <ImageComponent
                    source="../src/assets/img/pexels-yulia-polyako.jpg"
                    alt="main-image"
                />
            </MainImageContainer>

            <SecondImageContainer>
                <ImageComponent
                    source="../src/assets/img/pexels-yulia-polyako-2.jpg"
                    alt="main-image"
                />
            </SecondImageContainer>

            <InitialsContainer>
                <HusbandInitials>П</HusbandInitials>
                <WifeInitials>А</WifeInitials>
            </InitialsContainer>
        </ImagesContainer>
    );
};

export default ImagesContent;
