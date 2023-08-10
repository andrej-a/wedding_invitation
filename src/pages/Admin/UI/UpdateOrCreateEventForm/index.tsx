import React, { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import createEvent from '@/api/eventsAPI/createEvent';
import getAllEvents from '@/api/eventsAPI/getAllEvents';
import updateEvent from '@/api/eventsAPI/updateEvent';
import { ErrorMessage } from '@/components/Form/styles';
import DefaultButton from '@/components/UI/DefaultButton';
import { useAppDispatch } from '@/hooks/useStore';
import { setEvents, setShowUpdateOrCreateModal } from '@/store/slices/main';
import { adminPannelConstants, stringConstants } from '@/types/constants';
import {
    ICreateOrUpdateModalProps,
    IUPDATE_OR_CREATE_FORM,
} from '@/types/modalInterfaces';
import getUpdateFormDefaultValues from '@/utils/getUpdateFormDefaultValues';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormContainer, TextContainer } from '../DeleteForm/styles';
import { schema } from './config/schema';
import {
    Form,
    FormTitle,
    Input,
    InputContainer,
    InputDescription,
    ManageButtonsContainer,
} from './styles';

const {
    CHANGE_TITLE: CHANGE_EVENT_TITLE,
    CREATE_TITLE: CREATE_EVENT_TITLE,
    TIME_INPUT_LABEL,
    TIME_INPUT_PLACEHOLDER,
    EVENT_INPUT_LABEL,
    EVENT_INPUT_PLACEHOLDER,
    EVENT_DESCRIPTION_INPUT_LABEL,
    EVENT_DESCRIPTION_INPUT_PLACEHOLDER,
} = adminPannelConstants;

const { SUBMIT_BUTTON_VALUE, CANCEL_BUTTON_VALUE } = stringConstants;

const UpdateOrCreateEventForm = (props: ICreateOrUpdateModalProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useAppDispatch();
    const {
        payload: { _id },
    } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUPDATE_OR_CREATE_FORM>({
        resolver: yupResolver(schema),
        defaultValues: getUpdateFormDefaultValues(props),
    });

    const updateEventsStateAndCloseForm = () => {
        getAllEvents().then(events => dispatch(setEvents(events)));
        dispatch(setShowUpdateOrCreateModal(false));
    };

    const handleChange: SubmitHandler<IUPDATE_OR_CREATE_FORM> = ({
        time,
        event,
        eventDescription,
    }) => {
        if (props.type === 'update') {
            updateEvent({ _id, time, event, eventDescription }).then(status => {
                if (status) updateEventsStateAndCloseForm();
            });
        } else {
            createEvent({ time, event, eventDescription }).then(status => {
                if (status) updateEventsStateAndCloseForm();
            });
        }
    };

    return (
        <FormContainer>
            <TextContainer>
                <FormTitle>
                    {props.type === 'create'
                        ? CREATE_EVENT_TITLE
                        : CHANGE_EVENT_TITLE}{' '}
                    событие
                </FormTitle>
            </TextContainer>

            <Form ref={formRef} onSubmit={handleSubmit(handleChange)}>
                <InputContainer>
                    <InputDescription>
                        <strong>{TIME_INPUT_LABEL}</strong>
                    </InputDescription>
                    <Input
                        {...register('time')}
                        id="time"
                        name="time"
                        type="text"
                        autoComplete="off"
                        placeholder={TIME_INPUT_PLACEHOLDER}
                    />
                    <ErrorMessage>{errors.time?.message}</ErrorMessage>
                </InputContainer>
                <InputContainer>
                    <InputDescription>
                        <strong>{EVENT_INPUT_LABEL}</strong>
                    </InputDescription>
                    <Input
                        {...register('event')}
                        id="event"
                        name="event"
                        type="text"
                        autoComplete="off"
                        placeholder={EVENT_INPUT_PLACEHOLDER}
                    />
                    <ErrorMessage>{errors.event?.message}</ErrorMessage>
                </InputContainer>
                <InputContainer>
                    <InputDescription>
                        <strong>{EVENT_DESCRIPTION_INPUT_LABEL}</strong>
                    </InputDescription>
                    <Input
                        {...register('eventDescription')}
                        id="eventDescription"
                        name="eventDescription"
                        type="text"
                        autoComplete="off"
                        placeholder={EVENT_DESCRIPTION_INPUT_PLACEHOLDER}
                    />
                    <ErrorMessage>
                        {errors.eventDescription?.message}
                    </ErrorMessage>
                </InputContainer>

                <ManageButtonsContainer>
                    <DefaultButton
                        onClick={() => {
                            dispatch(setShowUpdateOrCreateModal(false));
                        }}
                    >
                        {CANCEL_BUTTON_VALUE}
                    </DefaultButton>
                    <DefaultButton disabled={!!Object.keys(errors).length}>
                        {SUBMIT_BUTTON_VALUE}
                    </DefaultButton>
                </ManageButtonsContainer>
            </Form>
        </FormContainer>
    );
};

export default UpdateOrCreateEventForm;
