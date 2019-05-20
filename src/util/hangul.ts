import * as hangul from 'hangul-js';

export function rangeSearchArray(keyword: string, array: string[]) {
  let filterredArray: string[] = [];
  let charRange: number[][][] = [];

  if (keyword.length <= 0) {
    return {
      filterredArray: array,
      charRange,
    };
  } else {
    array.forEach((item) => {
      const rangeArray = hangul.rangeSearch(item, keyword)
      if (rangeArray.length > 0) {
        filterredArray.push(item);
        charRange.push(rangeArray);
      }
    });

    return {
      filterredArray,
      charRange,
    };
  }
}

export default {
  rangeSearchArray
};