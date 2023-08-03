import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useAppSelector } from '@/hooks/useStore';

import Form from '../Form';
import { Overlay } from './styles';

interface IModalWindowProps {
    children: React.ReactNode;
}

const Modal = ({ children }: IModalWindowProps) => {
    const { isShowModal } = useAppSelector(store => store.mainSlice);
    useEffect(() => {
        document.body.style.overflow = isShowModal ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isShowModal]);

    return createPortal(<Overlay>{children}</Overlay>, document.body);
};

export default Modal;
