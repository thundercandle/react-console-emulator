"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var _default = function _default(state, props) {
  var isNotReadOnly = !props.readOnly;
  var shouldHideWhenDisabled = props.hidePromptWhenDisabled;
  var shouldDisableOnProcess = props.disableOnProcess;
  var isDisabled = props.disabled;
  var isProcessing = state.processing; // If prompt should be hidden when disabled...

  /* istanbul ignore if: Covered by interactivity tests */

  if (shouldHideWhenDisabled) {
    if (isDisabled) return false; // ...hide on explicit prop-controlled disable...
    else if (shouldDisableOnProcess && isProcessing) return false; // ...or when disabling on process is enabled and terminal is processing.
  } // If no above conditions were met, the read-only state controls whether the prompt should be visible or not


  return isNotReadOnly;
};

var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/utils/shouldPromptBeVisible.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();