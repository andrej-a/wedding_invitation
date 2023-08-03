import styled from 'styled-components';

export const Table = styled.table`
    width: 100vw;
    padding: 10px;

    th,
    td {
        padding: 5px;
        border: 1px solid #000;
    }
`;

export const TableHeads = styled.thead``;

export const TableRow = styled.tr``;

export const TableHeadRow = styled.th``;

export const TableBody = styled.tbody``;

export const BodyCell = styled.td`
    text-align: center;
    color: #000;
    font-size: 16px;
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 300;
`;

export const ImageContainer = styled.div`
    width: 30px;
    height: 30px;

    margin: 0 auto;

    cursor: pointer;
`;
