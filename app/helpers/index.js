// Validators
import emailValidator from './validators/emailValidator';
import passwordValidator from './validators/passwordValidator';
// Others
import numberWithSpaces from './others/numberWithSpaces';
import wordTruncator from './others/wordTruncator';
import capitalize from './others/capitalize';
import { getMonthNameLong, getMonthNameShort } from './others/getMonthName';
import {
  today,
  currentMonth,
  monthRangeUntilToday,
  currentYear,
} from './others/defaultDateSetter';

export {
  emailValidator,
  passwordValidator,
  numberWithSpaces,
  wordTruncator,
  capitalize,
  getMonthNameLong,
  getMonthNameShort,
  today,
  currentMonth,
  monthRangeUntilToday,
  currentYear,
};
