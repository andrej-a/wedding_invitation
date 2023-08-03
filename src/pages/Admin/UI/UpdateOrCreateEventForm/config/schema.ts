import * as yup from 'yup';

export const schema = yup.object({
    time: yup.string().required(),
    event: yup.string().required(),
    eventDescription: yup.string().required(),
});
