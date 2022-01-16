import { SIZES } from '..';

const RESERVATION_STATUS = [
  {
    status: 'confirmed',
    displayName: 'Оплачено',
  },
  {
    status: 'in_house',
    displayName: 'В номере',
  },
  {
    status: 'check_out',
    displayName: 'Выехал',
  },
  {
    status: 'canceled',
    displayName: 'Отменено',
  },
  {
    status: 'no_show',
    displayName: 'Не заезд',
  },
];

const RESERVATION_TYPE = [
  {
    status: 'type_checkin',
    displayName: 'Заезд',
  },
  {
    status: 'type_checkout',
    displayName: 'Выезд',
  },
  {
    status: 'type_booking_date',
    displayName: 'Бронирование',
  },
  {
    status: 'type_stay_dates',
    displayName: 'Проживание',
  },
];

const ARRIVALS_TYPE = [
  {
    status: 'arrived',
    displayName: 'Заезды',
  },
  {
    status: 'left',
    displayName: 'Выезды',
  },
  {
    status: 'living',
    displayName: 'Проживают',
  },
];

const SOURCE_TYPE = {
  channel: 'channel',
  basic: 'basic',
  company: 'company',
};

const SOURCE_NAME = {
  user: 'От стойки',
  telephone: 'Телефон',
  dolores: 'Dolores',
  site: 'Сайт',
  booking: 'Booking.com',
  tramina: 'Трамина',
  others: 'Другие',
};

const SEGMENT_VALUES = ['Обзор', 'Занятость'];

const COMPARISON_CARD_VALUES = [
  'Загрузка',
  'Доход',
  'Проданных номеров',
  'Средний чек',
  'RevPAR',
];

const YEARS_ARRAY = ['2019', '2020', '2021', '2022', '2023', '2024', '2025'];
const WEEKDAYS_SHORT_ARRAY = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const MONTHS_ARRAY = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const SETTINGS_MENU_ARRAY = [
  'Мои гостиницы',
  'Отзывы гостей',
  'Финансы',
  'Настройки сообщений',
  'Спецпредложения',
  'Центр возможностей',
  'Отчеты',
  'Повышение категории номера',
  'Питание',
];

const ITEM_SIZE = 65;
const ITEM_SPACING = (SIZES.width - ITEM_SIZE) / 2;
const DAYS_ARRAY = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

export {
  RESERVATION_TYPE,
  RESERVATION_STATUS,
  ARRIVALS_TYPE,
  SOURCE_NAME,
  SOURCE_TYPE,
  SEGMENT_VALUES,
  COMPARISON_CARD_VALUES,
  YEARS_ARRAY,
  SETTINGS_MENU_ARRAY,
  MONTHS_ARRAY,
  WEEKDAYS_SHORT_ARRAY,
  ITEM_SIZE,
  ITEM_SPACING,
  DAYS_ARRAY,
};
