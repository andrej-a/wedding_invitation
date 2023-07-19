import React from 'react';

import { Image } from './styles';

interface IImage {
    source: string;
    alt: string;
}

const ImageComponent = ({ source, alt }: IImage) => {
    return <Image src={source} alt={`${alt}`} />;
};

export default ImageComponent;
