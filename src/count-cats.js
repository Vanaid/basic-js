const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let numCats = 0;

  for (let subArr of matrix) {
    for (let elem of subArr) {
      if (elem === '^^') {
        numCats +=1;
      } else {
        numCats +=0;
      };
    }
  }
  return numCats;
};
