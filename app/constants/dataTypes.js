const RESERVATION_STATUS = {
  confirmed: 'confirmed',
  inHouse: 'in_house',
  checkOut: 'check_out',
  canceled: 'canceled',
  noShow: 'no_show',
};

const RESERVATION_STATUS_LABEL = {
  confirmed: 'Оплачено',
  inHouse: 'В номере',
  checkOut: 'Выехал',
  canceled: 'Отменено',
  noShow: 'Не заезд',
};

const RESERVATION_TYPE = {
  checkin: 'type_checkin',
  checkout: 'type_checkout',
  booking: 'type_booking_date',
  stay: 'type_stay_dates',
};

const RESERVATION_TYPE_LABEL = {
  checkin: 'Заезд',
  checkout: 'Выезд',
  booking: 'Бронирование',
  stay: 'Проживание',
};

const RESERVATION_TYPE_CAROUSEL = [
  {
    status: 'checkins',
    text: 'Заезды',
  },
  {
    status: 'checkouts',
    text: 'Выезды',
  },
  {
    status: 'stays',
    text: 'Проживают',
  },
];

const ARRIVALS_TYPE = {
  arrived: 'arrived',
  left: 'left',
  living: 'living',
};

const GUEST_TYPE = {
  arrived: 'arrived',
  left: 'left',
  living: 'living',
};

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
export {
  RESERVATION_TYPE,
  RESERVATION_TYPE_LABEL,
  RESERVATION_STATUS_LABEL,
  RESERVATION_STATUS,
  ARRIVALS_TYPE,
  GUEST_TYPE,
  SOURCE_NAME,
  SOURCE_TYPE,
  SEGMENT_VALUES,
  RESERVATION_TYPE_CAROUSEL,
  COMPARISON_CARD_VALUES,
};
