'use strict';
module.exports = function () {
  const password = {};
  const setValue = function (key, value) {
    password[key] = value;
  };
  const getValue = function (key) {
    if (key === undefined || !password[key]) {
      return null;
    } else {
      return password[key];
    };
  };
  return {
    setValue,
    getValue
  };
};