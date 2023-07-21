import React from 'react';

import IDetail from '@/components/types/IDetailsCard';

import {
    DetailContainer,
    DetailDescription,
    DetailTitle,
    TextContainer,
} from './styles';

const Detail = ({ title, description }: IDetail) => {
    return (
        <DetailContainer>
            <TextContainer>
                <DetailTitle>{title}</DetailTitle>
            </TextContainer>
            <TextContainer>
                <DetailDescription>{description}</DetailDescription>
            </TextContainer>
        </DetailContainer>
    );
};

export default Detail;
