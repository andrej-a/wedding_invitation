import { v4 } from 'uuid';
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required(),
    numberOfGuests: yup.string().required(),
});

const radioGenderValues = [
    {
        id: v4(),
        name: 'gender',
        value: 'Мужской',
    },
    {
        id: v4(),
        name: 'gender',
        value: 'Женский',
    },
];

const numberOfGuestsValues = [
    {
        id: v4(),
        name: 'numberOfGuests',
        value: 'Один',
    },
    {
        id: v4(),
        name: 'numberOfGuests',
        value: 'Несколько',
    },
];

export default schema;
export { numberOfGuestsValues, radioGenderValues };
