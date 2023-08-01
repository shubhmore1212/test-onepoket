function sumOfArray(arr) {
  return arr.reduce((prev, curr) => {
    return prev + parseFloat(curr);
  }, 0);
}

module.exports = { sumOfArray };
