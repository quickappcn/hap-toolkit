"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.logWarn=logWarn,exports.mkdirsSync=mkdirsSync,exports.getIPv4IPAddress=getIPv4IPAddress,exports.getServerIPAndPort=getServerIPAndPort,exports.getClientIPAddress=getClientIPAddress,exports.stripPrefixForIPV4MappedIPV6Address=stripPrefixForIPV4MappedIPV6Address,exports.outputQRCodeOnTerminal=outputQRCodeOnTerminal,exports.relateCwd=relateCwd,exports.equals=equals,exports.extend=extend,exports.renderString=renderString,exports.KnownError=KnownError,exports.debounce=debounce,exports.setCustomConfig=setCustomConfig,exports.colorconsole=void 0;var _os=_interopRequireDefault(require("os")),_fs=_interopRequireDefault(require("fs")),_path=_interopRequireDefault(require("path")),_console=require("console"),_chalk=_interopRequireDefault(require("chalk")),_qrcodeTerminal=_interopRequireDefault(require("qrcode-terminal")),_config=_interopRequireDefault(require("../config"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const logLevelMap={};function prependLevel(e,r){if(!logLevelMap[e]){const r=e.toUpperCase().substr(0,4);logLevelMap[e]=r}"string"==typeof r[0]&&r[0].length>1&&"["!==r[0][0]&&(r[0]=`[${logLevelMap[e]}] ${r[0]}`)}let console=new _console.Console(process.stdout,process.stderr);const colorconsole={init(e){e&&(console=new _console.Console(e,e))},trace(...e){prependLevel("trace",e),console.trace(...e)},log(...e){prependLevel("log",e),console.log(_chalk.default.green(...e))},info(...e){prependLevel("info",e),console.info(_chalk.default.green(...e))},warn(...e){prependLevel("warn",e),console.warn(_chalk.default.yellow.bold(...e))},error(...e){prependLevel("error",e),console.error(_chalk.default.red.bold(...e))},throw(...e){throw new Error(_chalk.default.red.bold(...e))}};function logWarn(e,r,t){r&&r.length&&r.forEach(r=>{const o=r.line&&r.column?"\t@"+r.line+":"+r.column:"";t||(r.reason.startsWith("ERROR")?colorconsole.error(e.context,r.reason+o):colorconsole.warn(e.context,r.reason+o))})}function mkdirsSync(e){return!!_fs.default.existsSync(e)||(mkdirsSync(_path.default.dirname(e))?(_fs.default.mkdirSync(e),!0):void 0)}function getIPv4IPAddress(){const e=_os.default.networkInterfaces();let r;for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)){if(e[t].every(e=>!("IPv4"===e.family&&!e.internal&&"127.0.0.1"!==e.address)||(r=e,!1)),void 0!==r)break}return r&&r.address}function getServerIPAndPort(e){return(getIPv4IPAddress()||"127.0.0.1")+`${80===e?"":":"+e}`}function getClientIPAddress(e){return stripPrefixForIPV4MappedIPV6Address(e.headers["x-forwarded-for"]||e.connection&&e.connection.remoteAddress||e.socket&&e.socket.remoteAddress||e.connection&&e.connection.socket&&e.connection.socket.remoteAddress)}function stripPrefixForIPV4MappedIPV6Address(e){return/^::1$/.test(e)&&(e="127.0.0.1"),/^::.{0,4}:(\d{1,3}\.){3}\d{1,3}/.test(e)&&(e=e.replace(/^.*:/,"")),e}function outputQRCodeOnTerminal(e){console.info(`\n生成HTTP服务器的二维码: ${e}`),_qrcodeTerminal.default.generate(e,{small:!0})}function relateCwd(e){const r=_config.default.projectPath;return _path.default.relative(r,e)}function equals(e,r,t,...o){if(t){if(t(e,r,...o))return!0}const n=Object.prototype.toString.call(e);if(n!==Object.prototype.toString.call(r))return!1;if("[object Null]"===n||"[object Undefined]"===n)return!0;if("[object Object]"!==n&&"[object Array]"!==n)return Object(e).toString()===Object(r).toString();const s={};Object.keys(e).forEach(e=>s[e]=!0),Object.keys(r).forEach(e=>s[e]=!0);const c=Object.keys(s);for(let o=0;o<c.length;o++){const n=c[o];if(!equals(e[n],r[n],t,n))return!1}return!0}function extend(e,...r){if("function"==typeof Object.assign)Object.assign(e,...r);else{const t=r.shift();for(const r in t)e[r]=t[r];r.length&&extend(e,...r)}return e}function renderString(e,r){return e.replace(/{{(.*?)}}/gm,(e,t)=>(t=t.trim(),void 0!==r[t]?r[t]:t))}function KnownError(e){const r=new Error(e);return r.name="KnownError",r.__KNOWN=!0,r}function debounce(e,r){let t=null;return function(){const o=this,n=arguments;t&&(clearTimeout(t),t=null),t=setTimeout(function(){e.apply(o,n)},r)}}function setCustomConfig(e,r){e=_config.default.projectPath=e||_config.default.projectPath;const t=_path.default.join(e,"quickapp.config.js");if(_fs.default.existsSync(t)){let e={};try{e=require(t)}catch(e){colorconsole.error(`读取项目自定义配置文件出错: ${e.message}`)}const r=Object.assign(_config.default.server,e.server);Object.assign(_config.default,e,{server:r})}r&&(_config.default.server.port=r)}exports.colorconsole=colorconsole;
//# sourceMappingURL=index.js.map
