/*
 * Copyright (C) 2017, hapjs.org. All rights reserved.
 */

const process = require('process')
const fs = require('fs')
const path = require('path')
const del = require('del')
const webpack = require('webpack')
const JSZip = require('jszip')
const globalConfig = require('@hap-toolkit/shared-utils/config')
const { copyApp } = require('hap-dev-utils')

const genWebpackConf = require('../gen-webpack-conf')

/**
 * 读取 zip(rpk) 文件内容
 *
 * @param zipfile
 * @returns {undefined}
 */
function readZip(zipfile) {
  return new Promise((resolve, reject) => {
    fs.readFile(zipfile, (err, buffer) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        JSZip.loadAsync(buffer).then(resolve, reject)
      }
    })
  })
}

/**
 * 调用 webpack 打包
 *
 * @param webpackConfig
 * @returns {undefined}
 */
function pack(projectRoot, platform = 'native', phase = 'dev', opts = {}) {
  return new Promise((resolve, reject) => {
    process.env.NODE_PLATFORM = platform
    process.env.NODE_PHASE = phase
    globalConfig.projectPath = projectRoot
    const webpackConfig = genWebpackConf({ cwd: projectRoot, ...opts }, 'development')

    webpack(webpackConfig, (err, stats) => {
      if (err) {
        reject(err)
      } else {
        if (stats && stats.hasErrors()) {
          console.log(stats.toString())
        }
        resolve(stats)
      }
    })
  })
}

describe('build quickapp', () => {
  it(
    'rpk/zip comment in normal pack',
    async () => {
      const testAppDir = path.resolve(__dirname, '../fixtures/app')
      const tempAppDir = await copyApp(testAppDir)

      const stats = await pack(tempAppDir)
      expect(stats.hasErrors()).toBeFalsy()

      const manifest = require(path.resolve(tempAppDir, 'src/manifest.json'))
      const rpkfile = path.resolve(tempAppDir, `dist/${manifest.package}.debug.rpk`)
      const zip = await readZip(rpkfile)
      const info = JSON.parse(zip.comment)
      expect(Object.keys(info)).toEqual(
        expect.arrayContaining(['arch', 'extends', 'node', 'platform', 'toolkit'])
      )
      await del([tempAppDir])
    },
    5 * 60 * 1000
  )

  it(
    'rpk/zip comment in subpackages',
    async () => {
      const testAppDir = path.resolve(__dirname, '../fixtures/subpackage-app/')
      const tempAppDir = await copyApp(testAppDir)

      const stats = await pack(tempAppDir)
      expect(stats.hasErrors()).toBeFalsy()

      const manifest = require(path.resolve(tempAppDir, 'src/manifest.json'))
      const rpkfile = path.resolve(tempAppDir, `dist/${manifest.package}.debug.rpks`)
      const zip = await readZip(rpkfile)
      // TODO check base.rpk?
      const info = JSON.parse(zip.comment)
      expect(Object.keys(info)).toEqual(
        expect.arrayContaining(['arch', 'extends', 'node', 'platform', 'toolkit'])
      )
      await del([tempAppDir])
    },
    5 * 60 * 1000
  )
})
