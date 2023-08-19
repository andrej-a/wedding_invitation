import { ICreateOrUpdateModalProps } from '@/types/modalInterfaces';

import { checkIfItsEventInstance } from './instanceChecker';

const getUpdateFormDefaultValues = ({
    type,
    payload,
}: ICreateOrUpdateModalProps) => {
    if (checkIfItsEventInstance(payload)) {
        const { time, event, eventDescription } = payload;
        return type === 'update'
            ? { time, event, eventDescription }
            : { time: '', event: '', eventDescription: '' };
    }
    const { name, gender, numberOfGuests } = payload;
    return type === 'update'
        ? { name, gender, numberOfGuests }
        : { name: '', gender: '', numberOfGuests: '' };
};

export default getUpdateFormDefaultValues;
