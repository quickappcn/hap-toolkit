"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _fs=_interopRequireDefault(require("fs")),_path=_interopRequireDefault(require("path")),_qrImage=_interopRequireDefault(require("qr-image")),_sharedUtils=require("@hap-toolkit/shared-utils"),_config=_interopRequireDefault(require("@hap-toolkit/shared-utils/config")),_recordClient=require("@hap-toolkit/shared-utils/lib/record-client"),_service=require("../service");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const CLIENT_PORT=39517,RPKS_SUPPORT_VERSION_FROM=1040;async function index(e,r){const t=e.app.server.address().port,o=(0,_service.getServerAddress)(t),i=_qrImage.default.image(o,{size:9});e.type="image/png",e.body=i,await r()}async function bundle(e,r){const{projectPath:t}=_config.default,o=_path.default.join(t,_config.default.releasePath);let i;const s=(0,_service.serverConf)(e),{options:a={}}=s;if(a.rpkPath)i=a.rpkPath,_path.default.isAbsolute(i)||(i=_path.default.join(t,a.rpkPath)),_sharedUtils.colorconsole.log(`### App Server ### 指定返回rpk：${i}`);else{const r=(0,_service.getProjectName)(t,_config.default.sourceRoot),s=e.request.query.platformVersion;s&&s>=RPKS_SUPPORT_VERSION_FROM&&(i=(0,_service.getDistFilePath)(o,r,"rpks")),i||(i=(0,_service.getDistFilePath)(o,r,"rpk"))}i?(e.body=_fs.default.createReadStream(i),e.set("Content-Type","application/octet-stream")):(_sharedUtils.colorconsole.error(`### App Server ### 项目${(0,_sharedUtils.relateCwd)(o)}目录下不存在rpk或rpks文件：${o}`),e.throw("404","无法找到项目的rpks或rpk文件")),await r()}async function logger(e,r){try{const{clientRecordPath:t}=_config.default,{sn:o,clientIp:i,linkMode:s}=(0,_service.getClientFromRequest)(e.request);let a={sn:o,ip:i,port:CLIENT_PORT};switch(s){case _service.LINK_MODE.WIFI:_sharedUtils.colorconsole.info(`### App Server ### 记录从${i}进入的HTTP请求`),(0,_recordClient.recordClient)(t,a);break;case _service.LINK_MODE.ADB:(a=(0,_recordClient.getRecordClient)(t,o,i))?(_sharedUtils.colorconsole.info(`### App Server ### 记录从设备(${o})进入的HTTP请求`),(0,_recordClient.recordClient)(t,a)):_sharedUtils.colorconsole.warn(`### App Server ### ：记录设备(${o})失败`)}await r()}catch(e){_sharedUtils.colorconsole.error(`### App Server ### 记录log出错: ${e.message}`)}}async function notify(e,r){const t=(0,_service.serverConf)(e).options.callback;if(t&&"function"==typeof t){t({action:"runCompile"})}e.status=200,await r()}async function qrCode(e,r){const t=e.app.server.address().port,o=(0,_service.getServerAddress)(t),i=_qrImage.default.image(o,{size:9});await r(),e.type="image/png",e.body=i}var _default={index:index,bundle:bundle,qrCode:qrCode,logger:logger,notify:notify};exports.default=_default;
//# sourceMappingURL=index.js.map
