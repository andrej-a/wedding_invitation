import React from 'react';

import ImageComponent from '../../UI/ImageComponent';
import { Container, ImageContainer } from './styles';

const NextBlockButton = () => {
    return (
        <Container>
            <ImageContainer
                onClick={() => alert('Здесь будет скролл к следующему блоку')}
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
