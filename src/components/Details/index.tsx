import React from 'react';

import { stringConstants } from '../../types/constants';
import { details } from './config/config';
import Detail from './DetailsCard';
import {
    DetailsContainer,
    DetailsInfoContainer,
    DetailsTitle,
    DetailsTitleContainer,
} from './styles';

const { DETAILS_TITLE } = stringConstants;

const Details = () => {
    return (
        <DetailsContainer>
            <DetailsTitleContainer>
                <DetailsTitle>{DETAILS_TITLE}</DetailsTitle>
            </DetailsTitleContainer>
            <DetailsInfoContainer>
                {details.map(({ id, title, description }) => {
                    return (
                        <Detail
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                        />
                    );
                })}
            </DetailsInfoContainer>
        </DetailsContainer>
    );
};

export default Details;
