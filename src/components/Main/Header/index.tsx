import React from 'react';

import { stringConstants } from '@/types/constants';

import { HeaderContainer, HeaderTitle, HeaderTitleContainer } from './styles';

const { HEADER_TITLE } = stringConstants;

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitleContainer>
                <HeaderTitle>{HEADER_TITLE}</HeaderTitle>
            </HeaderTitleContainer>
        </HeaderContainer>
    );
};

export default Header;
