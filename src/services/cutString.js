export function cutString(inputString) {
  if (inputString.length > 20) {
    return inputString.substring(0, 20) + '...';
  }
  return inputString;
}
