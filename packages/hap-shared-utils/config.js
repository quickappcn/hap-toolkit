const path = require('path')
// 用户home目录
const home = require('os').homedir()
const clientRecordPath = path.join(home, 'hap-toolkit-client-records.json')
module.exports = {
  projectPath: process.cwd(),
  clientRecordPath,
  sourceRoot: './src', // 源码根目录
  signRoot: './sign', // 证书签名路径
  releasePath: './dist', // 快应用包目录
  outputPath: './build', // 输出目录
  server: { port: 8000 }
}
