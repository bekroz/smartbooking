// Validators
import emailValidator from './validators/emailValidator';
import passwordValidator from './validators/passwordValidator';
// Others
import numberWithSpaces from './others/numberWithSpaces';
import { dottedTruncator, noDottedTruncator } from './others/wordTruncator';
import capitalize from './others/capitalize';
import { getMonthNameLong, getMonthNameShort } from './others/getMonthName';
import {
  today,
  currentMonth,
  monthRangeUntilToday,
  currentYear,
  firstDayOfMonth,
  date,
} from './others/defaultDateSetter';

import yearsArray from './others/yearArray';

export {
  emailValidator,
  passwordValidator,
  numberWithSpaces,
  dottedTruncator,
  noDottedTruncator,
  capitalize,
  getMonthNameLong,
  getMonthNameShort,
  today,
  currentMonth,
  monthRangeUntilToday,
  currentYear,
  yearsArray,
  firstDayOfMonth,
  date,
};
