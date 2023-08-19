import React, { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import { stringConstants } from '../../types/constants';
import { HusbandInitials, WifeInitials } from '../PreviewOverlay/styles';
import {
    FinalBlockContainer,
    FinalTitleContainer,
    InitialsContainer,
    TextContainer,
} from './styles';

const { FINAL_BLOCK_TITLE, husbandInitials, wifeInitials } = stringConstants;

const Final = () => {
    const finalTitle = useRef<HTMLDivElement>(null);
    const initials = useRef<HTMLDivElement>(null);
    useIntersectionObserver([finalTitle, initials]);
    return (
        <FinalBlockContainer>
            <TextContainer
                ref={finalTitle}
                style={{ opacity: 0, transition: 'all 1s ease' }}
            >
                <FinalTitleContainer>{FINAL_BLOCK_TITLE}</FinalTitleContainer>
            </TextContainer>

            <InitialsContainer
                ref={initials}
                style={{ opacity: 0, transition: 'all 1s ease' }}
            >
                <HusbandInitials>{husbandInitials}</HusbandInitials>
                <WifeInitials>{wifeInitials}</WifeInitials>
            </InitialsContainer>
        </FinalBlockContainer>
    );
};

export default Final;
