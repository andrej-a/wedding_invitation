import styled from 'styled-components';

export const InvitationContainer = styled.div`
    width: 100vw;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 130px 0 200px 0;

    background-color: #f4f4f4;
`;

export const InvitationContent = styled.div`
    width: auto;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 70px;
`;

export const FormTriggerContainer = styled.div`
    width: 100vw;
    max-width: 1210px;
    height: auto;
    min-height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 20px;

    padding-top: 150px;
`;
