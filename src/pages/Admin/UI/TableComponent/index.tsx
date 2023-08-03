import React, { memo, useState } from 'react';

import Modal from '@/components/Modal';
import ImageComponent from '@/components/UI/ImageComponent';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { setShowModal, setShowUpdateOrCreateModal } from '@/store/slices/main';
import ITimingCard from '@/types/ITimingCard';
import {
    ICreateOrUpdateModalProps,
    IManageFormProps,
} from '@/types/modalInterfaces';

import DeleteForm from '../DeleteForm';
import {
    BodyCell,
    ImageContainer,
    Table,
    TableBody,
    TableHeadRow,
    TableHeads,
    TableRow,
} from './styles';

interface ITableProps {
    heads: string[];
    bodyContent: ITimingCard[];
    setUpdatOrCreateModalProp: (props: ICreateOrUpdateModalProps) => void;
}

const TableComponent = memo(
    ({ heads, bodyContent, setUpdatOrCreateModalProp }: ITableProps) => {
        const { isShowModal } = useAppSelector(store => store.mainSlice);
        const dispatch = useAppDispatch();
        const [modalProps, setModalProps] = useState<IManageFormProps>({
            _id: '',
            description: '',
            type: 'events',
        });
        return (
            <>
                <Table>
                    <TableHeads>
                        <TableRow>
                            {heads.map((head, index) => {
                                return (
                                    <TableHeadRow key={index}>
                                        {head}
                                    </TableHeadRow>
                                );
                            })}
                        </TableRow>
                    </TableHeads>
                    <TableBody>
                        {bodyContent.map(
                            ({ _id, time, event, eventDescription }) => {
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
                                                        payload: {
                                                            _id,
                                                            time,
                                                            event,
                                                            eventDescription,
                                                        },
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
                                                onClick={() => {
                                                    dispatch(
                                                        setShowModal(true),
                                                    );
                                                    setModalProps({
                                                        _id,
                                                        type: 'events',
                                                        description: event,
                                                    });
                                                }}
                                            >
                                                <ImageComponent
                                                    source="../src/assets/img/delete_icon.png"
                                                    alt="delete"
                                                />
                                            </ImageContainer>
                                        </BodyCell>
                                    </TableRow>
                                );
                            },
                        )}
                    </TableBody>
                </Table>

                {isShowModal && (
                    <Modal>
                        <DeleteForm {...modalProps} />
                    </Modal>
                )}
            </>
        );
    },
);

export default TableComponent;
