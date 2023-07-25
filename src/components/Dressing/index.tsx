import React from 'react';

import { stringConstants } from '../../types/constants';
import Colors from './Colors';
import {
    DressContainer,
    DressDescription,
    DressTitle,
    TextContainer,
} from './styles';

const { DRESS_TITLE, DRESS_DESCRIPTION } = stringConstants;

const Dressing = () => {
    return (
        <DressContainer>
            <TextContainer>
                <DressTitle>{DRESS_TITLE}</DressTitle>
            </TextContainer>
            <TextContainer>
                <DressDescription>{DRESS_DESCRIPTION}</DressDescription>
            </TextContainer>
            <Colors />
        </DressContainer>
    );
};

export default Dressing;
