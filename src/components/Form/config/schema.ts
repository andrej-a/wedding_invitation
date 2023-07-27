import * as yup from 'yup';
import { stringConstants, numberConstants } from '@/types/constants';

const {
    REQUIRED_FIELD_MESSAGE,
    MISTAKE_VALUE_MESSAGE,
    TOO_MUCH_SYMBOLS_MESSAGE,
} = stringConstants;

const { MIN_INPUT_SYMBOLS, MAX_INPUT_SYMBOLS } = numberConstants;

yup.setLocale({
    mixed: {
        default: MISTAKE_VALUE_MESSAGE,
        required: REQUIRED_FIELD_MESSAGE,
    },
    string: {
        min: REQUIRED_FIELD_MESSAGE,
        max: TOO_MUCH_SYMBOLS_MESSAGE,
    },
});

export const schema = yup.object({
    guests: yup
        .string()
        .min(MIN_INPUT_SYMBOLS)
        .max(MAX_INPUT_SYMBOLS)
        .required(),
});
