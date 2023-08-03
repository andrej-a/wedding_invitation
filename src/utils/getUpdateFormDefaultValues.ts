import { ICreateOrUpdateModalProps } from '@/types/modalInterfaces';

const getUpdateFormDefaultValues = ({
    type,
    payload: { time, event, eventDescription },
}: ICreateOrUpdateModalProps) => {
    if (type === 'update') {
        return { time, event, eventDescription };
    }
    return { time: '', event: '', eventDescription: '' };
};

export default getUpdateFormDefaultValues;
