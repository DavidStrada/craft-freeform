export const truncate = (string: string, length = 50, ellipsis = '…', ellipsisLength = 3) => {
  if (string.length > length) {
    return string.substr(0, length - ellipsisLength) + ellipsis;
  }

  return string;
};
