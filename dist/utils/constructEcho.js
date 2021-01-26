"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _defaults = _interopRequireDefault(require("defaults"));

var _Terminal = _interopRequireDefault(require("../defs/styles/Terminal"));

var _TerminalMessage = _interopRequireDefault(require("../defs/styles/TerminalMessage"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var _default = function _default(promptLabel, rawInput, stylingProps) {
  var sources = {
    echo: {
      label: {
        className: stylingProps.promptLabelClassName,
        style: (0, _defaults["default"])(stylingProps.promptLabelStyle, _Terminal["default"].promptLabel)
      },
      text: {
        className: stylingProps.inputTextClassName,
        style: (0, _defaults["default"])(stylingProps.inputTextStyle, _Terminal["default"].inputText)
      }
    },
    // Note: Not offering individual options for message styling as messages only have one uniform style for the entire element per the spec
    message: {
      label: {
        className: stylingProps.messageClassName,
        style: (0, _defaults["default"])(stylingProps.messageStyle, _TerminalMessage["default"])
      },
      text: {
        className: stylingProps.messageClassName,
        style: (0, _defaults["default"])(stylingProps.messageStyle, _TerminalMessage["default"])
      }
    }
  }; // Getting these via an IIFE so I can use returns
  // This is because variable reassignment in switch statements gets really hairy really quick

  var styles = function () {
    switch (stylingProps.styleEchoBack) {
      case 'fullInherit':
        return sources.echo;

      case 'messageInherit':
        return sources.message;

      case 'labelOnly':
        return {
          label: sources.echo.label,
          text: {}
        };

      case 'textOnly':
        return {
          label: {},
          text: sources.echo.text
        };

      default:
        return {
          label: {},
          text: {}
        };
    }
  }();

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", styles.label, promptLabel, " "), /*#__PURE__*/_react["default"].createElement("span", styles.text, rawInput));
};

/**
 * Constructs command echo based on user's styling options
 * @param promptLabel - Prompt label element
 * @param rawInput - Raw command input
 * @param stylingProps - {
 *  styleEchoBack: string
 *  promptLabelClassName: string,
 *  promptLabelStyle: object,
 *  inputTextClassName: string,
 *  inputTextStyle: object
 * }
 */
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/utils/constructEcho.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();