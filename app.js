/**
  * Note: While repeating the first string until the string
  * is over the length of the second string + the length of the first string
  * may be a valid solution, I decided to iterate over the strings
  * like arrays to emulate the string being truly circular.
  */

/**
  * Func circularStringSearch
  * Parameters: String circularStr, String searchStr
  * Return values:
  * True -- if searchStr can be found in a circular circularStr.
  * False -- Any other cases.
  */

function infiniteCircularStringSearch(circularStr, searchStr) {
  const maxIndex = circularStr.length - 1;
  let circularIterator = 0;
  let searchIterator = 0;
  let currentCircularIndex = 0;

  // Ignore capitalization
  circularStr = circularStr.toLowerCase();
  searchStr = searchStr.toLowerCase();

  // if an empty string is passed into search, return true
  if (searchStr.length === 0) {
    return true;
  }

  while (true) {
    currentCircularIndex = circularStr.indexOf(searchStr[0], currentCircularIndex+1);
    if (currentCircularIndex === -1) {
      return false;
    } else {
      circularIterator = currentCircularIndex;
      while (true) {
        ++circularIterator;
        ++searchIterator;
        if (circularIterator > maxIndex) {
          circularIterator = 0;
        }
        if (searchStr[searchIterator] === undefined) {
          return true;
        }
        if (circularStr[circularIterator] !== searchStr[searchIterator]) {
          currentSearchIndex = 0;
          break;
        }
      }
    }
  }
}

function circularStringSearch(circularStr, searchStr) {
  const strLength = circularStr.length;
  while (circularStr.length < (searchStr.length + strLength)) {
    circularStr += circularStr;
  }
  return circularStr.indexOf(searchStr) > -1;
}

module.exports = circularStringSearch;