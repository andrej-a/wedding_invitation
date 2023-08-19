import { IGuest } from '@/types/IGuest';

const getInvitation = (guest: IGuest): string => {
    if (guest.numberOfGuests === 'Несколько') {
        return 'Дорогие';
    } else {
        return guest.gender === 'Мужской' ? 'Дорогой' : 'Дорогая';
    }
};

export const getButtonValue = (status: string) => {
    switch (status) {
        case 'canceled':
            return 'Изменить решение';
            break;
        case 'not checked':
        case 'checked':
            return 'Подтвердить';
        case 'confirm':
            return 'Редактировать';
        default:
            return 'Подтвердить';
    }
};

export default getInvitation;
