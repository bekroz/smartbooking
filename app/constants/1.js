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

switch (RESERVATION_TYPE) {
  case RESERVATION_TYPE.checkin:
    return {
      title: RESERVATION_TYPE_LABEL.checkin,
    };
  case RESERVATION_TYPE.checkout:
    return {
      title: RESERVATION_TYPE_LABEL.checkout,
    };
  case RESERVATION_TYPE.booking:
    return {
      title: RESERVATION_TYPE_LABEL.booking,
    };
  case RESERVATION_TYPE.stay:
    return {
      title: RESERVATION_TYPE_LABEL.stay,
    };
  default:
    return title;
}
