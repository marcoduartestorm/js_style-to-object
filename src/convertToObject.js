'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let vetSplited = sourceString.split(';')
  const obj = {};

  for (const c of vetSplited) {
    let c2;

    if (c !==  undefined) {
      c2 = c.trim();
    }

    if (c2 !== '') {
      let registerSplited = c.split(':');
      const key = registerSplited[0].trim();
      const value = registerSplited[1].trim();
      Object.assign(obj, {[key]:value});
    }
  }

  return obj;
}

module.exports = convertToObject;
