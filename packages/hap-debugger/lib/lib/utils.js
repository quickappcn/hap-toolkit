"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.startChrome=startChrome,Object.defineProperty(exports,"mkdirsSync",{enumerable:!0,get:function(){return _sharedUtils.mkdirsSync}}),Object.defineProperty(exports,"colorconsole",{enumerable:!0,get:function(){return _sharedUtils.colorconsole}}),Object.defineProperty(exports,"getIPv4IPAddress",{enumerable:!0,get:function(){return _sharedUtils.getIPv4IPAddress}}),Object.defineProperty(exports,"getClientIPAddress",{enumerable:!0,get:function(){return _sharedUtils.getClientIPAddress}}),Object.defineProperty(exports,"getServerIPAndPort",{enumerable:!0,get:function(){return _sharedUtils.getServerIPAndPort}}),Object.defineProperty(exports,"outputQRCodeOnTerminal",{enumerable:!0,get:function(){return _sharedUtils.outputQRCodeOnTerminal}}),Object.defineProperty(exports,"stripPrefixForIPV4MappedIPV6Address",{enumerable:!0,get:function(){return _sharedUtils.stripPrefixForIPV4MappedIPV6Address}});var _chromeSimpleLauncher=_interopRequireDefault(require("chrome-simple-launcher")),_sharedUtils=require("@hap-toolkit/shared-utils");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function startChrome(e,r){return _chromeSimpleLauncher.default.launch(e,{chromePath:r.chromePath})}
//# sourceMappingURL=utils.js.map
