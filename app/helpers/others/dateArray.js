let chosenDate = '2022-01-15';
let next = '2022-03s-15';

const month = date.getMonth();
const dispatchableDates = [];
const allDaysInMonth = [];

date.setDate(1);

const dis_year = dayjs(chosenDate).format('YYYY');
const dis_month = dayjs(chosenDate).format('MM');
const dis_day = dayjs(chosenDate).format('DD');
const previousMonth = dayjs(chosenDate).add(1, 'month');

const nextMonth = dayjs(chosenDate).add(1, 'month');

while (date.getMonth() == 0) {
  let originalMonth = dayjs(chosenDate).format('MM');
  let days = `${dis_year}-${dis_month}-${dis_day}`;

  let formattedDays = dayjs(days).format('D');

  dispatchableDates.push(days);
  allDaysInMonth.push(formattedDays);

  date.setDate(date.getDate() + 1);
}
dayjs().startOf(chosenDate).format('YYYY');
let mo = dayjs().startOf(chosenDate).format('MM');
let m = date.getMonth(next);

console.log(m);

let chosenDate = '2022-01-15';

const month = date.getMonth();
const dispatchableDates = [];
const allDaysInMonth = [];

date.setDate(1);

while (date.getMonth() == 0) {
  let originalMonth = dayjs(chosenDate).format('MM');
  let days =
    '2022' +
    '-' +
    originalMonth.toString().padStart(2, '0') +
    '-' +
    date.getDate().toString().padStart(2, '0');

  let formattedDays = dayjs(days).format('D');

  dispatchableDates.push(days);
  allDaysInMonth.push(formattedDays);

  date.setDate(date.getDate() + 1);
}
dayjs().startOf(chosenDate).format('YYYY');
let mo = dayjs().startOf(chosenDate).format('MM');

const displayedDays = [];
const dispatchingDays = [];
var getDaysOfMonth = function (year, month) {
  var monthDate = moment(year + '-' + month, 'YYYY-MM');
  var daysInMonth = monthDate.daysInMonth();
  var arrDays = [];

  while (daysInMonth) {
    var current = moment().date(daysInMonth);
    dispatchingDays.push(current.format('YYYY-MM-DD'));
    daysInMonth--;
  }

  return arrDays;
};

var dateList = getDaysOfMonth(2022, 3);
console.log(dispatchableDates);
// console.log('====================================');
// // console.log(dispatchableDates);
// console.log('====================================');
// console.log(origin
// format day to weekname

// const daysArray = [allDaysInMonth];

// let daysArray = {
//   let displayedDays = [];
//   let allDaysofMonth = [];
// };
// let chosenDate = '2021-01-01';

// // var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
// // var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

// // var month = date.getMonth();
// // var year = date.getFullYear();
// // let daysInMonth = new Date(year, month, 0).getDate();

// // console.log(daysInMonth);

// // Getting the all days in a month
let arr = dayjs().date(1).format('YYYY-MM-DD');
// console.log(arr);

// let a = new Date();
// var now = dayjs();
// let chosenDay = 1;
// let chosenMonth = 1;
// let formattedDay = dayjs().format(`2020-${chosenMonth}-${chosenDay}`);
// alert(a);
// // alert(lastDay);
