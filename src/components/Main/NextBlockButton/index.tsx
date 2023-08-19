import React, { useEffect } from 'react';

import { useAppSelector } from '@/hooks/useStore';

import ImageComponent from '../../UI/ImageComponent';
import { Container, ImageContainer } from './styles';

const NextBlockButton = () => {
    const { scrollToCoordinates } = useAppSelector(state => state.mainSlice);

    return (
        <Container>
            <ImageContainer
                onClick={() => window.scrollTo(0, scrollToCoordinates)}
            >
                <ImageComponent
                    source="../src/assets/img/arrow.svg"
                    alt="next_block_arrow"
                />
            </ImageContainer>
        </Container>
    );
};

export default NextBlockButton;
