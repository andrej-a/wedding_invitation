import styled from 'styled-components';

import size from '@/components/types/sizes';

const { mobileL } = size;

export const DetailContainer = styled.div`
    width: 360px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px 20px 30px 20px;

    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;

    @media (max-width: ${mobileL}px) {
        width: 90vw;
        min-height: 250px;
        height: auto;
    }
`;

export const TextContainer = styled.div`
    padding: 5px;
`;

export const DetailTitle = styled.p`
    margin-bottom: 10px;

    font-weight: 500;
    font-family: 'Open Sans';
    text-transform: uppercase;
    font-size: 20px;
    line-height: 1.35;
    color: #000;
`;

export const DetailDescription = styled.p`
    font-size: 16px;
    font-weight: 100;
    font-family: 'Open Sans';
    line-height: 1.55;
    color: #000;

    opacity: 0.7;
`;
