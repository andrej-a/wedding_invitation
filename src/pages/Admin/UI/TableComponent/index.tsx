import React, { memo, useEffect, useState } from 'react';

import Modal from '@/components/Modal';
import ImageComponent from '@/components/UI/ImageComponent';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import {
    setCurrentDeletionItem,
    setShowUpdateOrCreateGuestModal,
    setShowUpdateOrCreateModal,
    setShowUserModalForm,
} from '@/store/slices/main';
import { IGuest } from '@/types/IGuest';
import ITimingCard from '@/types/ITimingCard';
import {
    ICreateOrUpdateModalProps,
    IDeleteItemFormProps,
} from '@/types/modalInterfaces';
import { checkIfItsEventInstance } from '@/utils/instanceChecker';
import Heads from './Heads';
import { BodyCell, ImageContainer, Table, TableBody, TableRow } from './styles';
import { APIConstants } from '@/types/constants';

const { PREFIX } = APIConstants;

interface ITableProps {
    heads: string[];
    bodyContent: ITimingCard[] | IGuest[];
    setUpdatOrCreateModalProp: (props: ICreateOrUpdateModalProps) => void;
}

const TableComponent = memo(
    ({ heads, bodyContent, setUpdatOrCreateModalProp }: ITableProps) => {
        const dispatch = useAppDispatch();

        const openDeleteModalFormAndSetDeletionItem =
            (data: IDeleteItemFormProps) => () => {
                dispatch(setShowUserModalForm(true));
                dispatch(setCurrentDeletionItem(data));
            };
        return (
            <Table>
                <Heads heads={heads} />
                <TableBody>
                    {bodyContent.map(item => {
                        if (checkIfItsEventInstance(item)) {
                            const { _id, time, event, eventDescription } = item;
                            return (
                                <TableRow key={_id}>
                                    <BodyCell>{time}</BodyCell>
                                    <BodyCell>{event}</BodyCell>
                                    <BodyCell>{eventDescription}</BodyCell>
                                    <BodyCell>
                                        <ImageContainer
                                            onClick={() => {
                                                dispatch(
                                                    setShowUpdateOrCreateModal(
                                                        true,
                                                    ),
                                                );
                                                setUpdatOrCreateModalProp({
                                                    type: 'update',
                                                    payload: item,
                                                });
                                            }}
                                        >
                                            <ImageComponent
                                                source="../src/assets/img/change_icon.png"
                                                alt="change"
                                            />
                                        </ImageContainer>
                                    </BodyCell>
                                    <BodyCell>
                                        <ImageContainer
                                            onClick={openDeleteModalFormAndSetDeletionItem(
                                                {
                                                    type: 'events',
                                                    _id,
                                                    description: event,
                                                },
                                            )}
                                        >
                                            <ImageComponent
                                                source="../src/assets/img/delete_icon.png"
                                                alt="delete"
                                            />
                                        </ImageContainer>
                                    </BodyCell>
                                </TableRow>
                            );
                        }
                        const { _id, name, status, drinks, guests } = item;
                        return (
                            <TableRow key={_id}>
                                <BodyCell>{name}</BodyCell>
                                <BodyCell>{guests}</BodyCell>
                                <BodyCell>
                                    {PREFIX}
                                    {_id}
                                </BodyCell>
                                <BodyCell>{drinks.join(', ')}</BodyCell>
                                <BodyCell>{status}</BodyCell>
                                <BodyCell>
                                    <ImageContainer
                                        onClick={() => {
                                            dispatch(
                                                setShowUpdateOrCreateGuestModal(
                                                    true,
                                                ),
                                            );
                                            setUpdatOrCreateModalProp({
                                                type: 'update',
                                                payload: { ...item },
                                            });
                                        }}
                                    >
                                        <ImageComponent
                                            source="../src/assets/img/change_icon.png"
                                            alt="change"
                                        />
                                    </ImageContainer>
                                </BodyCell>
                                <BodyCell>
                                    <ImageContainer
                                        onClick={openDeleteModalFormAndSetDeletionItem(
                                            {
                                                type: 'guests',
                                                _id,
                                                description: name,
                                            },
                                        )}
                                    >
                                        <ImageComponent
                                            source="../src/assets/img/delete_icon.png"
                                            alt="delete"
                                        />
                                    </ImageContainer>
                                </BodyCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        );
    },
);

export default TableComponent;
