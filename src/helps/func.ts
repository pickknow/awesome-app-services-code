export function makeTitleUrl(str: string) {
  // Regular expression to match only letters and numbers
  const regex = /[a-zA-Z0-9]/;
  const ss = str.split('').map(x => !regex.test(x) ? '-' : x).join('');
  return ss.endsWith('-') ? ss.slice(0, -1) : ss
}

