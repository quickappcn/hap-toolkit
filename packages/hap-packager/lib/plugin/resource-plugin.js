"use strict";var _path=_interopRequireDefault(require("path")),_fsExtra=_interopRequireDefault(require("fs-extra")),_aaptjs=_interopRequireDefault(require("aaptjs")),_glob=_interopRequireDefault(require("glob")),_eventBus=_interopRequireDefault(require("@hap-toolkit/shared-utils/event-bus")),_sharedUtils=require("@hap-toolkit/shared-utils"),_info=require("../common/info"),_shared=require("../common/shared");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const{PACKAGER_BUILD_DONE:PACKAGER_BUILD_DONE}=_eventBus.default,FILE_EXT_LIST=_info.name.extList,FILE_EXT_NORES=FILE_EXT_LIST.concat([".js",".jsx",".coffee",".ts",".tsx",".vue",".css",".less",".sass",".styl",".html",".json",".md"]),EXT_PATTERN=FILE_EXT_NORES.map(e=>e.slice(1)).join("|");function ResourcePlugin(e){this.options=e}ResourcePlugin.prototype.apply=function(e){const t=this.options,s=e.options;e.hooks.watchRun.tapAsync("ResourcePlugin",function(e,t){Object.keys(s.entry).forEach(function(e){const t=s.entry[e];t instanceof Array&&!/app\.js/.test(e)&&-1!==t[0].indexOf("webpack-dev-server")&&t.shift()}),t()}),e.hooks.emit.tapAsync("ResourcePlugin",function(e,s){const o=t.src,r=t.dest;let a,l=_glob.default.sync(`**/+(*.!(${EXT_PATTERN})|manifest.json)`,{nodir:!0,cwd:o,ignore:["**/Thumbs.db"],absolute:!0});try{const e=_path.default.join(o,"manifest.json"),t=_fsExtra.default.readFileSync(e,"utf8");a=JSON.parse(t).icon,a=_path.default.join(o,a)}catch(e){a=""}let n=l.map(e=>({srcFile:e,destFile:_path.default.resolve(r,_path.default.relative(o,e))}));const{projectRoot:i}=t,u=_path.default.join(i,"node_modules"),c=e.fileDependencies;for(let e of c){const t=_path.default.extname(e);e.indexOf(u)>-1&&-1===FILE_EXT_NORES.indexOf(t)&&-1===l.indexOf(e)&&n.push({srcFile:e,destFile:_path.default.resolve(r,_path.default.relative(i,e))})}const d=(n=n.filter(e=>{const{srcFile:s}=e;return!t.optimizeUnusedResource||(c.has(s)||s===a||"manifest.json"===_path.default.relative(o,s))})).map(e=>new Promise((t,s)=>{const{srcFile:o,destFile:r}=e;_fsExtra.default.mkdirp(_path.default.dirname(r),()=>{let e;(e=/.+\.9\.png$/.test(o)?_aaptjs.default.singleCrunch((0,_sharedUtils.relateCwd)(o),(0,_sharedUtils.relateCwd)(r)).catch(e=>{e&&_sharedUtils.colorconsole.log(`### App Loader ### 复制文件 ${(0,_sharedUtils.relateCwd)(o)} 失败：${e.message}`)}):_fsExtra.default.copy(o,r).catch(e=>{throw _sharedUtils.colorconsole.log(`复制 ${o} -> ${r} 失败`),e})).then(t,s)})}));Promise.all(d).then(()=>{_sharedUtils.colorconsole.log(`### App Loader ### ${(0,_sharedUtils.relateCwd)(r)} 目录构建完成`),_eventBus.default.emit(PACKAGER_BUILD_DONE),s()},e=>{throw _sharedUtils.colorconsole.log("ERROR: 拷贝文件出现错误",e),e})}),e.hooks.emit.tapAsync("ResourcePlugin",(e,s)=>{const o=t.src,r=t.dest,a=_path.default.join(o,"manifest.json"),l=_path.default.join(r,"manifest.json");if(_fsExtra.default.existsSync(a)){let e;try{const t=_fsExtra.default.readFileSync(a,"utf8");e=JSON.parse(t)}catch(e){throw _sharedUtils.colorconsole.error("ERROR: 解析 manifest.json 文件出错 %s",e.message),e}const o=!t.sign;e=(0,_shared.updateManifest)(e,o);const r=JSON.stringify(e,null,o?2:0);_fsExtra.default.writeFile(l,r,"utf8",e=>{e&&_sharedUtils.colorconsole.error("### App Loader ### 更新 %s 失败：%s",(0,_sharedUtils.relateCwd)(a),e.message),s()})}else _sharedUtils.colorconsole.error("### App Loader ### %s 下无 manifest.json 文件",(0,_sharedUtils.relateCwd)(o)),s()})},module.exports=ResourcePlugin;
//# sourceMappingURL=resource-plugin.js.map
