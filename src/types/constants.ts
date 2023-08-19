export enum numberConstants {
    componentOpacityDelay = 2000,
    INTERSECTION_OBSERVER_DELAY = 0,
    MIN_INPUT_SYMBOLS = 2,
    MAX_INPUT_SYMBOLS = 35,
}

export enum stringConstants {
    wifeInitials = 'А',
    husbandInitials = 'П',
    WEDDING_DATE = '2023-09-30',
    NEWLYWEDS = 'Павел и Анастасия',
    STRING_WEDDING_DATE = '30 СЕНТЯБРЯ 2023',
    HEADER_TITLE = 'eternal love',
    INVITATION_TEXT = 'В нашей жизни предстоят счастливые перемены! Мы хотим, чтобы в этот день рядом с нами были самые близкие и дорогие для нас люди. Будем рады разделить с вами чудесный праздник в день нашей свадьбы.',
    ACCEPT_INVITATION = 'Подтвердить',
    REDJECT_INVITATION = 'Отклонить',
    LOCATION_TITLE = 'ЛОКАЦИЯ',
    LOCATION_DESCRIPTION = 'Наша свадьба пройдет в Усадьбе Villa Michetti — это маленькая Италия в часе езды от Москвы. \n \n Она находится по адресу: д. Бережки, Солнечногорский р-н.',
    MAP_BUTTON_TITLE = 'Перейти к карте',
    TIMING_TITLE = 'ТАЙМИНГ',
    NO_EVENTS_DESCRIPTION = 'К сожалению, мы еще не добавили ничего в расписание. Но скоро здесь обязательно что-то появится!',
    DETAILS_TITLE = 'ДЕТАЛИ',
    DRESS_TITLE = 'ДРЕСС-КОД',
    DRESS_DESCRIPTION = 'Мы будем рады, если девушки выберут вечерние или коктейльные платья в пастельных тонах, а мужчины — костюм.',
    FINAL_BLOCK_TITLE = 'ДО ВСТРЕЧИ!',
    FORM_TITLE = 'АНКЕТА ГОСТЯ',
    DESCRIPTION_FORM = 'Ваши ответы на вопросы очень помогут нам при организации свадьбы. \n \n Будем ждать ответ до 15.09.2023 г.',
    UI_ERROR_MESSAGE = 'Извините, непредвиденная ошибка. Попробуйте перезагрузить страницу.',
    NAME_INPUT_TITLE = 'Имя Фамилия',
    NAME_LABEL = 'если вы будете с парой или с семьёй, то внесите все имена, а также возраст детей',
    FAVOURITE_DRINK_TITLE = 'Предпочтение по напиткам',
    FAVOURITE_DRINK_LABEL = 'можно выбрать несколько вариантов',
    SUBMIT_BUTTON_VALUE = 'Отправить',
    CANCEL_BUTTON_VALUE = 'Отменить',
    INPUT_PLACEHOLDER = 'Оля и Женя, Аня (3 года)',
    CHECKBOX_ERROR_MESSAGE = 'Обязательное поле',
    REQUIRED_FIELD_MESSAGE = 'Поле обязательно для заполнения',
    MISTAKE_VALUE_MESSAGE = 'Неверное значение',
    TOO_MUCH_SYMBOLS_MESSAGE = 'Слишком много символов',
    SERVER_ERROR = 'Непредвиденная ошибка на сервере',
}

export enum APIConstants {
    URL = 'https://white-dibbler-cuff.cyclic.cloud/',
    PREFIX = 'https://wedding-invitation-liard.vercel.app/',
    GET_ALL_EVENTS = 'events/get',
    DELETE_EVENT = 'events/deleteEvent',
    UPDATE_EVENT = 'events/updateEvent',
    CREATE_EVENT = 'events/createEvent',
    GET_ALL_GUESTS = 'guests/getAllGuests',
    DELETE_GUEST = 'guests/deleteGuest',
    CREATE_GUEST = 'guests/createGuest',
    UPDATE_GUEST = 'guests/updateGuest',
    GET_GUEST_BY_ID = 'guests/getGuestByID',
}

export enum adminPannelConstants {
    EVENTS_PANNEL_TITLE = 'Панель событий',
    GUESTS_PANEL_TITLE = 'Приглашенные гости',
    CHANGE_TITLE = 'Редактировать ',
    CREATE_TITLE = 'Создать ',
    TIME_INPUT_LABEL = 'Время в формате чч:мм',
    TIME_INPUT_PLACEHOLDER = '15:00',
    EVENT_INPUT_LABEL = 'Название события',
    EVENT_INPUT_PLACEHOLDER = 'Название события',
    EVENT_DESCRIPTION_INPUT_LABEL = 'Описание события',
    EVENT_DESCRIPTION_INPUT_PLACEHOLDER = 'Описание события',
    CREATE_EVENT_BUTTON_TITLE = 'Добавить событие',
    CONFIRM_DELETION_MESSAGE = 'Вы уверены, что хотите удалить:',
    CREATE_GUEST_BUTTON_TITLE = 'Добавить гостя',
    NAME_GUEST_INPUT_LABEL = 'Имя или несколько имен',
    NAME_GUEST_INPUT_PLACEHOLDER = 'Иванна и Олег',
    GENDER_INPUT_LABEL = 'Пол (если гостей несколько, то указывать не нужно)',
    GUESTS_NUMBER_LABEL = 'Количество гостей',
}
