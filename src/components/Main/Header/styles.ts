import styled from 'styled-components';

import size from '../../types/sizes';

const { mobileL } = size;

export const HeaderContainer = styled.header`
    width: 100vw;
    height: auto;
    min-height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;
`;

export const ImageContainer = styled.div`
    width: 530px;
    height: 60px;

    @media (max-width: ${mobileL}px) {
        width: 300px;
    }
`;
