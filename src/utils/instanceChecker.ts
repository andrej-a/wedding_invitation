import { IGuest } from '@/types/IGuest';
import ITimingCard from '@/types/ITimingCard';

export const checkIfItsEventInstance = (
    object: IGuest | ITimingCard,
): object is ITimingCard => {
    return 'time' in object;
};
