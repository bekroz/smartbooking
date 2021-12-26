import capitalize from './capitalize';

const getMonthNameLong = month => {
  const d = new Date();
  d.setMonth(month - 1);
  const monthName = d.toLocaleString('ru', { month: 'long' });
  return capitalize(monthName);
};

const getMonthNameShort = month => {
  const d = new Date();
  d.setMonth(month - 1);
  const monthName = d.toLocaleString('ru', { month: 'short' });
  return capitalize(monthName);
};

export { getMonthNameLong, getMonthNameShort };
