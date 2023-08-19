import React, { forwardRef, memo, Ref } from 'react';

import { DefaultButtonElement, DefaultButtonWrapper } from './styles';
import { ButtonProps } from './types';

export const DefaultButton: React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef((props, ref) => {
    const { children, ...rest } = props;

    return (
        <DefaultButtonWrapper>
            <DefaultButtonElement {...rest} ref={ref}>
                {children}
            </DefaultButtonElement>
        </DefaultButtonWrapper>
    );
});

export default DefaultButton;
