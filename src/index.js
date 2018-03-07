module.exports = function longestConsecutiveLength(array) {
  if(array[0] === undefined) return 0;

  let sortedArr = array.sort((a, b) => a - b);
  let allLengths = [];
  let lengthCounter = 1;

  let sortedArrLength = sortedArr.length;
  for (let i = 0; i < sortedArrLength; i++) {
    if (sortedArr[i] + 1 === sortedArr[i + 1]) {
      lengthCounter++;
    } else if (sortedArr[i] === sortedArr[i + 1]) {
      continue;
    } else {
      allLengths.push(lengthCounter);
      lengthCounter = 1;
    }
  }

  return Math.max.apply(null, allLengths);
}