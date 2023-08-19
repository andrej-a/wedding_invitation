import React, { useRef } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import config from './config/config';
import { ColorCard, ColorsContainer } from './styles';

const Colors = () => {
    const colorsContainer = useRef<HTMLDivElement>(null);
    useIntersectionObserver([colorsContainer]);

    return (
        <ColorsContainer
            ref={colorsContainer}
            style={{ opacity: 0, transition: 'all 1s ease' }}
        >
            {config.map(({ id, title }) => {
                return <ColorCard key={id} color={title} />;
            })}
        </ColorsContainer>
    );
};

export default Colors;
