"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cleanArray = _interopRequireDefault(require("../utils/cleanArray"));

var _sendCursorToEnd = _interopRequireDefault(require("../utils/sendCursorToEnd"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var _default = function _default(direction, options) {
  var history = options.history,
      historyPosition = options.historyPosition,
      previousHistoryPosition = options.previousHistoryPosition,
      terminalInput = options.terminalInput; // BUG: I have to duplicate sendCursorToEnd for each condition, because doing so in a catch-all manner doesn't seem to work at all
  // Clean potential empty items and reverse order to ease position tracking
  // (Reverse = starting from the newest first when going up and vice versa)

  var commandHistory = (0, _cleanArray["default"])(history).reverse();
  var position = historyPosition;
  var previousPosition = previousHistoryPosition;
  var terminal = terminalInput.current;

  if (commandHistory.length > 0) {
    // Only run if history is non-empty and in use
    switch (direction) {
      case 'up':
        {
          // Declaring variables for these here to better clarify this block which can get pretty convoluted
          var latest = commandHistory[0];
          var first = commandHistory[commandHistory.length - 1];
          var next = commandHistory[position + 1];

          if (position === null) {
            // If at no yet defined position, get most recent entry
            terminal.value = latest;
            (0, _sendCursorToEnd["default"])(terminal);
            return {
              historyPosition: 0,
              previousHistoryPosition: null
            };
          } else if (position + 1 === commandHistory.length) {
            // If the first entry will be reached on this press, get it and decrement position by 1 to avoid confusing downscroll
            // EXCEPT: If there is only 1 unit in the history, our previous position was actually null, not zero as defined above
            // Hence why in one-unit histories the previous position has to be set to null, not 0
            terminal.value = first;
            (0, _sendCursorToEnd["default"])(terminal);
            return {
              historyPosition: commandHistory.length - 1,
              previousHistoryPosition: commandHistory.length === 1 ? null : commandHistory.length - 2
            };
          } else {
            // Normal increment by one
            terminal.value = next;
            (0, _sendCursorToEnd["default"])(terminal);
            return {
              historyPosition: position + 1,
              previousHistoryPosition: position
            };
          }
        }

      case 'down':
        {
          // Declaring variables for these here to better clarify this block which can get pretty convoluted
          var _latest = commandHistory[0];
          var empty = '';
          var _next = commandHistory[position - 1];

          if (position === null || !commandHistory[position]) {
            // If at initial or out of range, clear (Unix-like behaviour)
            terminal.value = empty;
            (0, _sendCursorToEnd["default"])(terminal);
            return {
              historyPosition: null,
              previousHistoryPosition: null
            };
          } else if (position - 1 === -1) {
            // Clear because user is either pressing up once and is now pressing down again, or is reaching the latest entry
            if (previousPosition === null || position === 0 && previousPosition === 1) terminal.value = empty;else terminal.value = _latest;
            (0, _sendCursorToEnd["default"])(terminal);
            return {
              historyPosition: null,
              previousHistoryPosition: null
            };
          } else {
            // Normal decrement by one
            terminal.value = _next;
            (0, _sendCursorToEnd["default"])(terminal);
            return {
              historyPosition: position - 1,
              previousHistoryPosition: position
            };
          }
        }
    }
  }
};

/**
 * Scrolls command history in a given direction
 * @param {String} direction Direction to scroll in ('up' or 'down')
 * @param {Object} options
 * @param {Array} options.history - Array of previous inputs from the user
 * @param {Number} options.historyPosition - Current position in the history
 * @param {Number} options.previousHistoryPosition - Previous position in the history
 * @param {React.Ref} options.terminalInput - Ref to the terminal input element
 */
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/handlers/scrollHistory.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();