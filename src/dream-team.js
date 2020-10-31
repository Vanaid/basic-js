const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name = [];
  if (!Array.isArray(members)) return false;

  for (let elem of members) {
    if (typeof(elem) === 'string') {
      const arrElem = elem.trim().toUpperCase().split('');
      name.push(arrElem[0]);
    } else {
      false;
    }
  }
  return name.sort().join('');
};
