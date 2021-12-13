import capitalize from './capitalize';

export default function getMonthName(month) {
  const d = new Date();
  d.setMonth(month - 1);
  const monthName = d.toLocaleString('ru', { month: 'long' });
  return capitalize(monthName);
}
