import { v4 as uuidv4 } from 'uuid';

import ICheckbox from '@/types/ICheckbox';

const config: ICheckbox[] = [
    {
        id: uuidv4(),
        labelValue: 'Водка',
        checkboxValue: 'Водка',
        registerValue: 'Водка',
    },
    {
        id: uuidv4(),
        labelValue: 'Коньяк',
        checkboxValue: 'Коньяк',
        registerValue: 'Коньяк',
    },
    {
        id: uuidv4(),
        labelValue: 'Виски',
        checkboxValue: 'Виски',
        registerValue: 'Виски',
    },
    {
        id: uuidv4(),
        labelValue: 'Шампанское',
        checkboxValue: 'Шампанское',
        registerValue: 'Шампанское',
    },
    {
        id: uuidv4(),
        labelValue: 'Белое вино',
        checkboxValue: 'Белое вино',
        registerValue: 'Белое вино',
    },
    {
        id: uuidv4(),
        labelValue: 'Красное вино',
        checkboxValue: 'Красное вино',
        registerValue: 'Красное вино',
    },
    {
        id: uuidv4(),
        labelValue: 'Безалкогольные напитки',
        checkboxValue: 'Безалкогольные напитки',
        registerValue: 'Безалкогольные напитки',
    },
];
export default config;
