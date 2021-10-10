const _ = {
  clamp(number, lowerBound, upperBound) {
    const lowerClampedValue = Math.max(number, lowerBound);
    const clampedValue = Math.min(lowerClampedValue, upperBound);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (!end) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }
    return start <= number && number < end;
  },
  words(string) {
    return string.split(' ');
  },
  pad(string, length) {
    if (length <= string.length) return string;
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key) {
    return !!object[key];
  },
  invert(object) {
    const invertedObject = {};
    for (const key in object) {
      let value = object[key];
      invertedObject[value] = key;
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (const key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) return key;
    }
    return undefined;
  },
  drop(array, n) {
    if (!n) n = 1;
    return array.slice(n);
  },
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size) {
    if (!size) size = 1;
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;
