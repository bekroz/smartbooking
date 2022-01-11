import dayjs from 'dayjs';

const firstDayOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const today = dayjs().startOf('day').format('YYYY-MM-DD');
const currentMonth = dayjs().startOf('month').format('MM');
const currentYear = dayjs().startOf('year').format('YYYY');

const monthRangeUntilToday = {
  startDate: firstDayOfMonth,
  endDate: today,
};
export { today, currentMonth, monthRangeUntilToday, currentYear };
