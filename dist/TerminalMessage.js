"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactInnerHtml = _interopRequireDefault(require("react-inner-html"));

var _defaults = _interopRequireDefault(require("defaults"));

var _TerminalMessage = _interopRequireDefault(require("./defs/types/TerminalMessage"));

var _TerminalMessage2 = _interopRequireDefault(require("./defs/styles/TerminalMessage"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var TerminalMessage = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TerminalMessage, _Component);

  var _super = _createSuper(TerminalMessage);

  function TerminalMessage() {
    (0, _classCallCheck2["default"])(this, TerminalMessage);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TerminalMessage, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          content = _this$props.content,
          style = _this$props.style,
          className = _this$props.className;
      var styles = {
        message: (0, _defaults["default"])(style, _TerminalMessage2["default"])
      };

      if (typeof content === 'string') {
        // this isnt working any more if I use \n in the code
        var lines = content.split('\n');
        return lines // this is a fix for a very weird bug
        .filter(function (line) {
          return !line.match('&gt;');
        }).map(function (line, i, arr) {
          return _this.props.dangerMode ? /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
            className: className,
            style: styles.message
          }, (0, _reactInnerHtml["default"])(line), {
            key: line[0] + i
          })) : /*#__PURE__*/_react["default"].createElement("div", {
            className: className,
            style: styles.message
          }, line, i < arr.length && /*#__PURE__*/_react["default"].createElement("br", null));
        });
      }

      return this.props.dangerMode ? /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: className,
        style: styles.message
      }, (0, _reactInnerHtml["default"])(content))) : /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        style: styles.message
      }, content);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return TerminalMessage;
}(_react.Component);

exports["default"] = TerminalMessage;
(0, _defineProperty2["default"])(TerminalMessage, "propTypes", _TerminalMessage["default"]);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TerminalMessage, "TerminalMessage", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/TerminalMessage.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();