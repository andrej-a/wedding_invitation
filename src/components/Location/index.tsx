import React, { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import { stringConstants } from '../types/constants';
import DefaultButton from '../UI/DefaultButton';
import {
    LocationContainer,
    LocationContentContainer,
    LocationDescription,
    LocationDescriptionContainer,
    LocationTitle,
    LocationTitleContainer,
} from './styles';

const { LOCATION_TITLE, LOCATION_DESCRIPTION, MAP_BUTTON_TITLE } =
    stringConstants;

const Location = () => {
    const goToMapButtonRef = useRef<HTMLButtonElement>(null);
    useIntersectionObserver([goToMapButtonRef]);
    return (
        <LocationContainer>
            <LocationContentContainer>
                <LocationTitleContainer>
                    <LocationTitle>{LOCATION_TITLE}</LocationTitle>
                </LocationTitleContainer>

                <LocationDescriptionContainer>
                    <LocationDescription>
                        {LOCATION_DESCRIPTION}
                    </LocationDescription>
                </LocationDescriptionContainer>
                <DefaultButton
                    onClick={() => alert('Здесь перейдем в Яндекс.Карты')}
                    ref={goToMapButtonRef}
                    style={{ opacity: 0, transition: 'all 2s ease' }}
                >
                    {MAP_BUTTON_TITLE}
                </DefaultButton>
            </LocationContentContainer>
        </LocationContainer>
    );
};

export default Location;
