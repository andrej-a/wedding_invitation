import React from 'react';
import {
    Container,
    HusbandInitials,
    InitialsContainer,
    WifeInitials,
} from './styles';

type Props = {};

const PreviewOverlay = (props: Props) => {
    return (
        <Container>
            <InitialsContainer>
                <HusbandInitials>П</HusbandInitials>
                <WifeInitials>А</WifeInitials>
            </InitialsContainer>
        </Container>
    );
};

export default PreviewOverlay;
