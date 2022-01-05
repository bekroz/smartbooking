const rangeOfYears = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((year, index) => year + index);
const yearsArray = rangeOfYears(2019, 2026);

export default yearsArray;
