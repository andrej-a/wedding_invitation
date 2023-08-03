import ITimingCard from './ITimingCard';

export interface ICreateOrUpdateModalProps {
    type: 'create' | 'update';
    payload: ITimingCard;
}

export interface IUPDATE_OR_CREATE_FORM {
    time: string;
    event: string;
    eventDescription: string;
}

export interface IManageFormProps {
    type: 'events' | 'guests';
    _id: string;
    description: string;
}
