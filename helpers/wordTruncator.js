export default function wordTruncator(string, n) {
  return string?.length > n ? string.substr(0, n - 1) + '...' : string;
}
