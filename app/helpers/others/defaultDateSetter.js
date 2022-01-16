import axios from 'axios';
import dayjs from 'dayjs';
const minMax = require('dayjs/plugin/minMax');
const toArray = require('dayjs/plugin/toArray');
dayjs.extend(minMax);
dayjs.extend(toArray);
import 'dayjs/locale/ru';
import moment from 'moment';
import { capitalize } from '..';

const firstDayOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const today = dayjs().startOf('day').format('YYYY-MM-DD');
const currentMonth = dayjs().startOf('month').format('MM');
const currentYear = dayjs().startOf('year').format('YYYY');
const date = new Date();

const monthRangeUntilToday = {
  startDate: firstDayOfMonth,
  endDate: today,
};
export {
  firstDayOfMonth,
  today,
  currentMonth,
  monthRangeUntilToday,
  currentYear,
  date,
};

// let chosenDate = '2022-01-15';

// const month = date.getMonth();
// const dispatchableDates = [];
// const allDaysInMonth = [];

// date.setDate(1);

// while (date.getMonth() == 0) {
//   let originalMonth = dayjs(chosenDate).format('MM');
//   let days =
//     '2022' +
//     '-' +
//     originalMonth.toString().padStart(2, '0') +
//     '-' +
//     date.getDate().toString().padStart(2, '0');

//   let formattedDays = dayjs(days).format('D');

//   dispatchableDates.push(days);
//   allDaysInMonth.push(formattedDays);

//   date.setDate(date.getDate() + 1);
// }
// dayjs().startOf(chosenDate).format('YYYY');
// let mo = dayjs().startOf(chosenDate).format('MM');

// const displayedDays = [];
// const dispatchingDays = [];

// const dis_year = dayjs(chosenDate).format('YYYY');
// const dis_month = dayjs(chosenDate).format('MM');
// const dis_day = dayjs(chosenDate).format('DD');

// const getDaysOfMonth = function () {
//   var monthDate = moment(dis_year + '-' + dis_month, 'YYYY-MM');
//   var daysInMonth = monthDate.daysInMonth();
//   var arrDays = [];

//   while (daysInMonth) {
//     var current = moment().date(daysInMonth);
//     dispatchingDays.push(current.format('YYYY-MM-DD'));

//     daysInMonth--;
//   }

//   return arrDays;
// };
// console.log('====================================');
// console.log(dispatchingDays);
// console.log('====================================');
