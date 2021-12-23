import dayjs from 'dayjs';

const firstDayOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const today = dayjs().startOf('day').format('YYYY-MM-DD');

const monthRangeUntilToday = {
  start_date: firstDayOfMonth,
  end_date: today,
};

export { firstDayOfMonth, today, monthRangeUntilToday };
