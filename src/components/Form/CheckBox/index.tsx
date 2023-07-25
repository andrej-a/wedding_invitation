import React, { useEffect, useState } from 'react';

import { useAppDispatch } from '@/hooks/useStore';
import { addFavouriteDrink, removeFavouriteDrink } from '@/store/slices/main';
import ICheckbox from '@/types/ICheckbox';

import { CheckboxInput, CheckBoxLabel, LabelCheckboxContainer } from './styles';

const Checkbox = ({ checkboxValue, registerValue, labelValue }: ICheckbox) => {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useAppDispatch();

    const onHandleCheck = () => {
        setIsChecked(!isChecked);
    };
    useEffect(() => {
        isChecked
            ? dispatch(addFavouriteDrink(checkboxValue))
            : dispatch(removeFavouriteDrink(checkboxValue));
    }, [isChecked]);

    return (
        <LabelCheckboxContainer>
            <CheckboxInput
                onChange={onHandleCheck}
                value={checkboxValue}
                id={registerValue}
                name={registerValue}
                type="checkbox"
            />
            <CheckBoxLabel htmlFor={registerValue}>{labelValue}</CheckBoxLabel>
        </LabelCheckboxContainer>
    );
};

export default Checkbox;
