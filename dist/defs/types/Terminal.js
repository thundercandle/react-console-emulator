"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var styleTypes = {
  style: _propTypes["default"].object,
  contentStyle: _propTypes["default"].object,
  inputAreaStyle: _propTypes["default"].object,
  promptLabelStyle: _propTypes["default"].object,
  inputStyle: _propTypes["default"].object,
  inputTextStyle: _propTypes["default"].object
};
var classNameTypes = {
  className: _propTypes["default"].string,
  contentClassName: _propTypes["default"].string,
  inputAreaClassName: _propTypes["default"].string,
  promptLabelClassName: _propTypes["default"].string,
  inputClassName: _propTypes["default"].string,
  inputTextClassName: _propTypes["default"].string
};
var optionTypes = {
  autoFocus: _propTypes["default"].bool,
  dangerMode: _propTypes["default"].bool,
  styleEchoBack: _propTypes["default"].oneOf(['labelOnly', // Only persist label style
  'textOnly', // Only persist text style
  'fullInherit', // Inherit entire prompt style
  'messageInherit' // Inherit message style
  // (undefined signifies default behaviour)
  // Not offering individual options for message styling as messages only have one uniform style for the entire element per the spec
  ]),
  locked: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  disableOnProcess: _propTypes["default"].bool,
  hidePromptWhenDisabled: _propTypes["default"].bool,
  ignoreCommandCase: _propTypes["default"].bool,
  noDefaults: _propTypes["default"].bool,
  noEchoBack: _propTypes["default"].bool,
  noHistory: _propTypes["default"].bool,
  noAutoScroll: _propTypes["default"].bool,
  noNewlineParsing: _propTypes["default"].bool
};
var labelTypes = {
  welcomeMessage: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].string]),
  promptLabel: _propTypes["default"].node,
  errorText: _propTypes["default"].string
};
var commandTypes = {
  commands: _propTypes["default"].object.isRequired,
  // Cannot validate beyond this because names are dynamic
  commandCallback: _propTypes["default"].func
};
var messageTypes = {
  messageStyle: _propTypes["default"].object,
  messageClassName: _propTypes["default"].string
};

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, styleTypes), classNameTypes), optionTypes), labelTypes), commandTypes), messageTypes);

var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styleTypes, "styleTypes", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/defs/types/Terminal.js");
  reactHotLoader.register(classNameTypes, "classNameTypes", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/defs/types/Terminal.js");
  reactHotLoader.register(optionTypes, "optionTypes", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/defs/types/Terminal.js");
  reactHotLoader.register(labelTypes, "labelTypes", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/defs/types/Terminal.js");
  reactHotLoader.register(commandTypes, "commandTypes", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/defs/types/Terminal.js");
  reactHotLoader.register(messageTypes, "messageTypes", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/defs/types/Terminal.js");
  reactHotLoader.register(_default, "default", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/defs/types/Terminal.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();