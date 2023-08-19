import styled from 'styled-components';

import size from '@/types/sizes';

const { laptopX, laptop, tablet, mobileM } = size;

export const InvitationContainer = styled.div`
    width: 100vw;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 130px 0 80px 0;

    background-color: #f4f4f4;

    @media (max-width: ${laptop}px) {
        padding: 40px 10px;
    }

    @media (max-width: ${mobileM}px) {
        padding: 30px 10px;
    }
`;

export const InvitationContent = styled.div`
    width: auto;
    height: auto;
    width: 1200px;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: ${laptop}px) {
        width: 100vw;
        flex-direction: column;
        align-items: center;
    }
`;

export const FormTriggerContainer = styled.div`
    width: 1200px;
    height: auto;
    min-height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 20px;
    padding: 20px;

    padding-top: 90px;

    @media (max-width: ${laptopX}px) {
        justify-content: center;
        position: relative;
        z-index: 5;
    }

    @media (max-width: ${tablet}px) {
        top: 0;
        padding: 40px 20px 20px;
        align-items: center;
    }

    @media (max-width: ${mobileM}px) {
        flex-direction: column-reverse;
    }
`;
