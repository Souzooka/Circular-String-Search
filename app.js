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

function circularStringSearch(circularStr, searchStr) {
  const maxIndex = circularStr.length - 1;
  let circularIndex = 0;
  let currentCircularIndex = 0;
  let currentSearchIndex = 0;

  // if an empty string is passed into search, return true
  if (searchStr.length === 0) {
    return true;
  }

  while (true) {
    currentCircularIndex = circularStr.indexOf(searchStr[0], currentCircularIndex+1);
    if (currentCircularIndex === -1) {
      return false;
    } else {
      circularIndex = currentCircularIndex;
      while (true) {
        ++circularIndex;
        ++currentSearchIndex;
        if (circularIndex > maxIndex) {
          circularIndex = 0;
        }
        if (searchStr[currentSearchIndex] === undefined) {
          return true;
        }
        if (circularStr[circularIndex] !== searchStr[currentSearchIndex]) {
          currentSearchIndex = 0;
          break;
        }
      }
    }
  }
}

module.exports = circularStringSearch;