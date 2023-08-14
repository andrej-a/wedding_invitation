import React, { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { setShowUserModalForm } from '@/store/slices/main';
import { stringConstants } from '@/types/constants';
import { yupResolver } from '@hookform/resolvers/yup';

import DefaultButton from '../UI/DefaultButton';
import Checkbox from './CheckBox';
import config from './config/config';
import { schema } from './config/schema';
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
import updateGuest from '@/api/guestsAPI/updateGuest';
import useGuests from '@/hooks/useGuests';

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
    INPUT_PLACEHOLDER,
    CHECKBOX_ERROR_MESSAGE,
} = stringConstants;

const Form = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const { favouriteDrinks, currentGuest } = useAppSelector(
        state => state.mainSlice,
    );
    const [isErrorMessage, setIsErrorMessage] = useState(false);
    const dispatch = useAppDispatch();
    const { getGuestByIDAndSetToState, updateGuestAndSetItToStore } =
        useGuests();

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
            updateGuestAndSetItToStore({
                ...currentGuest,
                guests,
                drinks: favouriteDrinks,
                status: 'confirm',
            });
        }
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>({
        resolver: yupResolver(schema),
        defaultValues: { guests: currentGuest.guests },
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
                        placeholder={INPUT_PLACEHOLDER}
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
                        <ErrorMessage>{CHECKBOX_ERROR_MESSAGE}</ErrorMessage>
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
                    dispatch(setShowUserModalForm(false));
                }}
            >
                X
            </CloseModalButton>
        </FormContainer>
    );
};

export default Form;
