import { PERSIANN_NUMBERS } from "./constants";

export const convertNumToPersiann = num => {
  num = num.toString();
  let persiannNum = "";
  for (let i = 0; i < num.length; i++) {
    persiannNum += PERSIANN_NUMBERS[num[i]];
  }
  return persiannNum;
};

export const range = (start, end) => {
  let length = Math.max(end - start, 0);
  const result = [];

  while (length--) {
    result[length] = start + length;
  }

  return result;
};

export const chunk = (array, size) => {
  const length = array.length;
  let index = 0;
  let resIndex = -1;
  const result = [];

  while (index < length) {
    result[++resIndex] = array.slice(index, (index += size));
  }

  return result;
};
