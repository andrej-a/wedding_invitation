import React from 'react';

import { TableHeadRow, TableHeads, TableRow } from './styles';

interface IHeadsProps {
    heads: string[];
}

const Heads = ({ heads }: IHeadsProps) => {
    return (
        <TableHeads>
            <TableRow>
                {heads.map((head, index) => {
                    return <TableHeadRow key={index}>{head}</TableHeadRow>;
                })}
            </TableRow>
        </TableHeads>
    );
};

export default Heads;
