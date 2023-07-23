import React from 'react';

import config from './config/config';
import { ColorCard, ColorsContainer } from './styles';

const Colors = () => {
    return (
        <ColorsContainer>
            {config.map(({ id, title }) => {
                return <ColorCard key={id} color={title} />;
            })}
        </ColorsContainer>
    );
};

export default Colors;
