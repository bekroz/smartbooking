const RESERVATION_STATUS = {
  confirmed: 'confirmed',
  inHouse: 'in_house',
  checkOut: 'check_out',
  canceled: 'canceled',
  noShow: 'no_show',
};

const RESERVATION_TYPE = {
  checkin: 'type_checkin',
  checkout: 'type_checkout',
  booking: 'type_booking_date',
  stay: 'type_stay_dates',
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

export { RESERVATION_TYPE, RESERVATION_STATUS, GUEST_TYPE, SOURCE_TYPE };
