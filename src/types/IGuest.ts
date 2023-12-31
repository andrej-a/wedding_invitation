type GuestStatus = 'not checked' | 'checked' | 'confirm' | 'canceled';

export interface IGuest {
    _id: string;
    name: string;
    guests: string;
    numberOfGuests: string;
    gender: string;
    status: GuestStatus;
    drinks: string[];
}
