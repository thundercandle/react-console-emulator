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

var _default = function _default(commands, commandName, matchCaseInsensitive) {
  /* istanbul ignore next: Covered by interactivity tests */
  if (matchCaseInsensitive) {
    for (var _i = 0, _Object$keys = Object.keys(commands); _i < _Object$keys.length; _i++) {
      var command = _Object$keys[_i];

      if (new RegExp("^".concat(commandName, "$"), 'gi').test(command)) {
        return {
          exists: true,
          command: command // Have to return the defined and existing command name that matched here, otherwise the executor won't know which one it is

        };
      }
    }

    if (commands["default"]) {
      return {
        exists: true,
        command: commands["default"] // Have to return the defined and existing command name that matched here, otherwise the executor won't know which one it is

      };
    } // Command not found


    return {
      exists: false,
      command: null
    };
  } else {
    if (!commands[commandName] && commands["default"]) {
      return {
        exists: true,
        command: 'default' // Have to return the defined and existing command name that matched here, otherwise the executor won't know which one it is

      };
    }

    return {
      exists: commandName in commands,
      command: commandName
    };
  }
};

var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/michaelpsharpe/workspace/project89/react-console-emulator/src/utils/commandExists.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();