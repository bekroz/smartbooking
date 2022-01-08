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

switch (RESERVATION_STATUS) {
  case RESERVATION_STATUS.confirmed:
    return {
      title: RESERVATION_STATUS_LABEL.confirmed,
    };
  case RESERVATION_STATUS.inHouse:
    return {
      title: RESERVATION_STATUS_LABEL.inHouse,
    };
  case RESERVATION_STATUS.checkOut:
    return {
      title: RESERVATION_STATUS_LABEL.checkOut,
    };
  case RESERVATION_STATUS.canceled:
    return {
      title: RESERVATION_STATUS_LABEL.canceled,
    };
  case RESERVATION_STATUS.noShow:
    return {
      title: RESERVATION_STATUS_LABEL.noShow,
    };
  default:
    return title;
}
