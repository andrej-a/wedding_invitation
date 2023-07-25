import React, { useEffect, useState } from 'react';

import { numberConstants, stringConstants } from '../../types/constants';
import {
    Container,
    HusbandInitials,
    InitialsContainer,
    WifeInitials,
} from './styles';

const { componentOpacityDelay } = numberConstants;
const { wifeInitials, husbandInitials } = stringConstants;

const PreviewOverlay = () => {
    const [componentOpacity, setComponentOpacity] = useState(1);
    const [isDisplayed, setIsDisplayed] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setComponentOpacity(0);
        }, componentOpacityDelay);

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if (!componentOpacity) {
            const timeoutId = setTimeout(() => {
                setIsDisplayed(false);
            }, componentOpacityDelay);

            return () => clearTimeout(timeoutId);
        }
    }, [componentOpacity]);

    return (
        isDisplayed && (
            <Container componentOpacity={componentOpacity}>
                <InitialsContainer>
                    <HusbandInitials>{husbandInitials}</HusbandInitials>
                    <WifeInitials>{wifeInitials}</WifeInitials>
                </InitialsContainer>
            </Container>
        )
    );
};

export default PreviewOverlay;
