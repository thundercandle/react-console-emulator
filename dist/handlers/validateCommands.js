"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _commandExists2 = _interopRequireDefault(require("../utils/commandExists"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var _default = function _default(commands, helpFn, clearFn, options) {
  var defaultCommands = {
    help: {
      description: 'Show a list of available commands.',
      fn: helpFn
    },
    clear: {
      description: 'Empty the terminal window.',
      explicitExec: true,
      fn: clearFn
    }
  };
  var validCommands; // Pre-register defaults

  if (!options.noDefaults) validCommands = _objectSpread({}, defaultCommands);else validCommands = {};

  for (var c in commands) {
    // If matching commands case-insensitively, ensure that command names are clean to avoid regex DoS
    // JS prop names don't allow weird characters unless quoted, but this is just a safety feature
    if (options.ignoreCommandCase && /[^a-zA-Z0-9-_]/gi.test(c)) {
      throw new Error("Command name '".concat(c, "' is invalid; command names can only contain latin characters (A-Z), numbers (0-9) and dashes/underscores (- or _)"));
    }

    var _commandExists = (0, _commandExists2["default"])(validCommands, c, options.ignoreCommandCase),
        exists = _commandExists.exists; // Check that command does not already exist


    if (exists) {
      throw new Error("Attempting to override existing command '".concat(c, "'; please only supply one definition of a certain command, or set the noDefaults property to enable overriding of existing commands"));
    } // Check that command contains a function


    if (typeof commands[c].fn !== 'function') {
      throw new Error("'fn' property of command '".concat(c, "' is invalid; expected 'function', got '").concat((0, _typeof2["default"])(commands[c].fn), "'"));
    } // Add description if missing


    if (!commands[c].description) commands[c].description = 'None'; // Pass validation

    validCommands[c] = commands[c];
  }

  return validCommands;
};

/**
 * @param {Object} commands Command definitions
 * @param {Function} helpFn Function to display default help output
 * @param {Function} clearFn Function to clear the screen
 * @param {Object} options
 * @param {Object} options.noDefaults Whether to register default commands or not
 * @param {Object} options.ignoreCommandCase Whether to match command names case-insensitively or not
*/
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/handlers/validateCommands.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();