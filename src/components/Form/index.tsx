import React, { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { setShowModal } from '@/store/slices/main';
import { stringConstants } from '@/types/constants';
import { yupResolver } from '@hookform/resolvers/yup';

import DefaultButton from '../UI/DefaultButton';
import Checkbox from './CheckBox';
import config from './config/config';
import {
    CloseModalButton,
    DescriptionForm,
    ErrorMessage,
    FormComponent,
    FormContainer,
    FormTitle,
    InputFieldContainer,
    InputLabel,
    InputTitle,
    NameInput,
    TextContainer,
} from './styles';

yup.setLocale({
    mixed: {
        default: 'Неверное значение',
        required: 'Поле обязательно для заполнения',
    },
    string: {
        min: 'Поле обязательно для заполнения',
        max: 'Слишком много символов',
    },
});
export const schema = yup.object({
    guests: yup.string().min(2).max(35).required(),
});

interface IForm {
    guests: string;
}
const {
    FORM_TITLE,
    DESCRIPTION_FORM,
    NAME_INPUT_TITLE,
    NAME_LABEL,
    FAVOURITE_DRINK_TITLE,
    FAVOURITE_DRINK_LABEL,
    SUBMIT_BUTTON_VALUE,
} = stringConstants;

const Form = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const { favouriteDrinks } = useAppSelector(state => state.mainSlice);
    const [isErrorMessage, setIsErrorMessage] = useState(false);
    const dispatch = useAppDispatch();

    const onSetErrorMessage = (status: boolean) => {
        setIsErrorMessage(status);
    };

    useEffect(() => {
        if (favouriteDrinks.length) {
            onSetErrorMessage(false);
        }
    }, [favouriteDrinks]);

    const handleChange: SubmitHandler<IForm> = ({ guests }) => {
        if (!favouriteDrinks.length) {
            onSetErrorMessage(true);
        } else {
            console.log(guests, favouriteDrinks);
        }
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>({
        resolver: yupResolver(schema),
        defaultValues: { guests: '' },
    });
    return (
        <FormContainer>
            <TextContainer>
                <FormTitle>{FORM_TITLE}</FormTitle>
            </TextContainer>
            <TextContainer>
                <DescriptionForm>{DESCRIPTION_FORM}</DescriptionForm>
            </TextContainer>

            <FormComponent ref={formRef} onSubmit={handleSubmit(handleChange)}>
                <InputFieldContainer>
                    <InputTitle>{NAME_INPUT_TITLE}</InputTitle>
                    <InputLabel>{NAME_LABEL}</InputLabel>
                    <NameInput
                        {...register('guests')}
                        id="guests"
                        name="guests"
                        type="text"
                        autoComplete="off"
                        placeholder="Оля и Женя, Аня (3 года)"
                    />
                    <ErrorMessage>{errors.guests?.message}</ErrorMessage>
                </InputFieldContainer>

                <InputFieldContainer>
                    <InputTitle>{FAVOURITE_DRINK_TITLE}</InputTitle>
                    <InputLabel>{FAVOURITE_DRINK_LABEL}</InputLabel>
                    {config.map(
                        ({ id, registerValue, checkboxValue, labelValue }) => {
                            return (
                                <Checkbox
                                    key={id}
                                    id={id}
                                    registerValue={registerValue}
                                    checkboxValue={checkboxValue}
                                    labelValue={labelValue}
                                />
                            );
                        },
                    )}
                    {isErrorMessage && (
                        <ErrorMessage>Обязательное поле</ErrorMessage>
                    )}
                </InputFieldContainer>

                <DefaultButton
                    disabled={!!Object.keys(errors).length || isErrorMessage}
                >
                    {SUBMIT_BUTTON_VALUE}
                </DefaultButton>
            </FormComponent>
            <CloseModalButton
                onClick={() => {
                    dispatch(setShowModal(false));
                }}
            >
                X
            </CloseModalButton>
        </FormContainer>
    );
};

export default Form;
