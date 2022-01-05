const dottedTruncator = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + '...' : string;
};

const noDottedTruncator = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + '' : string;
};

export { dottedTruncator, noDottedTruncator };
