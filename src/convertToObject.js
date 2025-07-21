'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let vetSplited = sourceString.split(';')
  const result = {};

  for (const c of vetSplited) {
    let c2;

    if (c !==  undefined && c!== '') {
      c2 = c.trim();
    }

    if (c2 !== '') {
      let registerSplited = c.split(':');
      const key = registerSplited[0].trim();
      const value = registerSplited[1].trim();
      Object.assign(result, {[key]:value});
    }
  }

  return result;
}

module.exports = convertToObject;
