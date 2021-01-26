"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cleanArray;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Workaround to clean an array from 'ghost items'.
 * @param {Array} dirtyArray
 */
function cleanArray(dirtyArray) {
  var newArray = Array.from(dirtyArray);
  return newArray.filter(function (i) {
    return i !== undefined;
  });
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(cleanArray, "cleanArray", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/utils/cleanArray.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();