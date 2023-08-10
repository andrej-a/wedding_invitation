import React, { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import createGuest from '@/api/guestsAPI/createGuest';
import getAllGuests from '@/api/guestsAPI/getAllGuests';
import updateGuest from '@/api/guestsAPI/updateGuest';
import { ErrorMessage } from '@/components/Form/styles';
import DefaultButton from '@/components/UI/DefaultButton';
import { useAppDispatch } from '@/hooks/useStore';
import {
    setGuests,
    setShowUpdateOrCreateGuestModal,
} from '@/store/slices/main';
import { adminPannelConstants, stringConstants } from '@/types/constants';
import { IGuest } from '@/types/IGuest';
import { ICreateOrUpdateModalProps } from '@/types/modalInterfaces';
import getUpdateFormDefaultValues from '@/utils/getUpdateFormDefaultValues';
import { checkIfItsEventInstance } from '@/utils/instanceChecker';
import { yupResolver } from '@hookform/resolvers/yup';

import { TextContainer } from '../../EventsPanel/styles';
import { FormTitle } from '../UpdateOrCreateEventForm/styles';
import schema, {
    numberOfGuestsValues,
    radioGenderValues,
} from './config/config';
import {
    Container,
    Form,
    Input,
    InputContainer,
    InputDescription,
    ManageButtonsContainer,
    RadioLabel,
} from './styles';

const {
    CHANGE_TITLE,
    CREATE_TITLE,
    NAME_GUEST_INPUT_LABEL,
    NAME_GUEST_INPUT_PLACEHOLDER,
    GENDER_INPUT_LABEL,
    GUESTS_NUMBER_LABEL,
} = adminPannelConstants;

const { CANCEL_BUTTON_VALUE, SUBMIT_BUTTON_VALUE } = stringConstants;

interface IUpdateOrCreateGuestForm {
    name: string;
    numberOfGuests: string;
    gender: string;
}

const UpdateOrCreateGuestForm = (props: ICreateOrUpdateModalProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUpdateOrCreateGuestForm>({
        resolver: yupResolver(schema),
        defaultValues: getUpdateFormDefaultValues(props),
    });

    const closeModalWindow = () => {
        dispatch(setShowUpdateOrCreateGuestModal(false));
    };

    const updateGuestsStateAndCloseForm = () => {
        getAllGuests().then(guests => dispatch(setGuests(guests)));
        closeModalWindow();
    };

    const handleChange: SubmitHandler<IUpdateOrCreateGuestForm> = ({
        name,
        numberOfGuests,
        gender,
    }) => {
        if (props.type === 'create') {
            createGuest({
                name,
                numberOfGuests,
                gender,
                status: 'not checked',
                drinks: [],
            }).then(status => {
                status ? updateGuestsStateAndCloseForm() : null;
            });
        } else {
            updateGuest({
                ...props.payload,
                name,
                numberOfGuests,
                gender,
                status: 'not checked',
                drinks: [],
            }).then(status => {
                status ? updateGuestsStateAndCloseForm() : null;
            });
        }
    };

    return (
        <Container>
            <TextContainer>
                <FormTitle>
                    {props.type === 'create' ? CREATE_TITLE : CHANGE_TITLE}{' '}
                    гостя
                </FormTitle>
            </TextContainer>

            <Form ref={formRef} onSubmit={handleSubmit(handleChange)}>
                <InputContainer>
                    <InputDescription>
                        {NAME_GUEST_INPUT_LABEL}
                    </InputDescription>
                    <Input
                        {...register('name')}
                        type="text"
                        placeholder={NAME_GUEST_INPUT_PLACEHOLDER}
                    />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </InputContainer>

                <InputContainer>
                    <InputDescription>{GENDER_INPUT_LABEL}</InputDescription>
                    {radioGenderValues.map(({ id, value, name }) => {
                        return (
                            <RadioLabel key={id}>
                                <Input
                                    {...register(name as 'name')}
                                    type="radio"
                                    name={name}
                                    value={value}
                                />
                                {value}
                            </RadioLabel>
                        );
                    })}
                    <ErrorMessage>{errors.gender?.message}</ErrorMessage>
                </InputContainer>

                <InputContainer>
                    <InputDescription>{GUESTS_NUMBER_LABEL}</InputDescription>
                    {numberOfGuestsValues.map(({ id, name, value }) => {
                        return (
                            <RadioLabel key={id}>
                                <Input
                                    {...register(name as 'name')}
                                    type="radio"
                                    name={name}
                                    value={value}
                                />
                                {value}
                            </RadioLabel>
                        );
                    })}
                    <ErrorMessage>
                        {errors.numberOfGuests?.message}
                    </ErrorMessage>
                </InputContainer>

                <ManageButtonsContainer>
                    <DefaultButton onClick={closeModalWindow}>
                        {CANCEL_BUTTON_VALUE}
                    </DefaultButton>
                    <DefaultButton>{SUBMIT_BUTTON_VALUE}</DefaultButton>
                </ManageButtonsContainer>
            </Form>
        </Container>
    );
};

export default UpdateOrCreateGuestForm;
