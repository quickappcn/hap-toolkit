"use strict";var _child_process=_interopRequireDefault(require("child_process")),_os=_interopRequireDefault(require("os")),_path=_interopRequireDefault(require("path")),_fsExtra=_interopRequireDefault(require("fs-extra")),_chalk=_interopRequireDefault(require("chalk"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function report(){const e=process.versions,r=_child_process.default.execSync("npm -v").toString(),o=process.arch,t=_os.default.release(),s=_os.default.type();console.log(_chalk.default.green("正在收集环境信息...")),_child_process.default.exec("npm list --json",{maxBuffer:10485760},(i,n,l)=>{if(i||l)return void console.error(i||l);const u=JSON.parse(n.toString()),a={nodeVersion:e,npmVersion:r,arch:o,osVersion:t,osType:s,dependenciesTree:u};_fsExtra.default.writeFileSync(_path.default.join(process.cwd(),"report.log"),JSON.stringify(a,null,2)),console.log(_chalk.default.green("收集完毕"))})}module.exports=report;
//# sourceMappingURL=report.js.map
