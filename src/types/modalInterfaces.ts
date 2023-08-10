import { IGuest } from './IGuest';
import ITimingCard from './ITimingCard';

export interface ICreateOrUpdateModalProps {
    type: 'create' | 'update';
    payload: ITimingCard | IGuest;
}

export interface IUPDATE_OR_CREATE_FORM {
    time: string;
    event: string;
    eventDescription: string;
}

export interface IDeleteItemFormProps {
    type: 'events' | 'guests';
    _id: string;
    description: string;
}
