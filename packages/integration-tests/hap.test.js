/*
 * Copyright (C) 2017, hapjs.org. All rights reserved.
 */

const process = require('process')
const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')
const del = require('del')
const fetch = require('node-fetch')
const { run, lsfiles } = require('hap-dev-utils')

describe('hap-toolkit', () => {
  const packageInfo = require('hap-toolkit/package.json')
  const hapbin = require.resolve('hap-toolkit/bin/index.js')
  // to create unique folders
  const timestamp = Date.now()
  // dir of toolkit source project
  const dirRepo = process.cwd()
  // project test base directory
  const dirTestProjects = path.resolve(process.cwd(), 'test/build/projects/')

  // Make sure dir exists
  fse.mkdirpSync(dirTestProjects)

  it(
    'folder existed',
    async () => {
      const EXIST_NAME = 'existed-app-' + timestamp
      const NO_EXIST_NAME = 'no-exist-app-' + timestamp
      const targetdirForExist = path.join(dirTestProjects, EXIST_NAME)
      const targetdirForNonExist = path.join(dirTestProjects, NO_EXIST_NAME)

      const dialogs = [
        {
          pattern: /init your project/i,
          feeds: '\r'
        },
        {
          pattern: /Please pick a new name/,
          type: 'stderr',
          dialogs: [
            {
              pattern: /Init your project/,
              feeds: NO_EXIST_NAME + '\r'
            }
          ]
        }
      ]
      await del([targetdirForExist, targetdirForNonExist])
      fs.mkdirSync(targetdirForExist)
      const { stderr } = await run(process.execPath, [hapbin, 'init', EXIST_NAME], dialogs, {
        cwd: dirTestProjects
      })
      expect(stderr.toString()).toMatch(/Please pick a new name/)
      await del([targetdirForExist, targetdirForNonExist])
    },
    10 * 60 * 1000
  )

  it(
    'init vue demo project',
    async () => {
      const TEST_NAME = 'project-vue-demo-testapp-' + timestamp
      const targetdir = path.join(dirTestProjects, TEST_NAME)

      const dialogs = [
        {
          pattern: /Init your project/,
          feeds: '\r'
        }
      ]

      await del([targetdir])
      await run(process.execPath, [hapbin, 'init', TEST_NAME, '--dsl=vue'], dialogs, {
        cwd: dirTestProjects
      })

      // setup env
      await run('lerna', ['bootstrap', '--no-ci'], [], { cwd: dirRepo })
      const nodeModulesFiles = await lsfiles('*', { cwd: path.resolve(targetdir, 'node_modules') })
      expect(nodeModulesFiles.length).toBeGreaterThan(0)

      await run('npm', ['run', 'build'], [], { cwd: targetdir })
      const rpks = await lsfiles('*.rpk', { cwd: path.resolve(targetdir, 'dist') })
      expect(rpks.length).toBe(1)

      const pages = JSON.parse(fs.readFileSync(path.resolve(targetdir, 'src/manifest.json'))).router
        .pages
      for (let i = 0, len = pages.length; i < len; i++) {
        const cssJsons = await lsfiles('index.css.json', {
          cwd: path.resolve(targetdir, 'build', pages[i])
        })
        expect(cssJsons.length).toBe(1)
      }

      await del([targetdir])
    },
    10 * 60 * 1000
  )

  it(
    'init and build project:bundle dsl into rpk',
    async () => {
      const TEST_NAME = 'project-vue-demo-with-rpk-' + timestamp
      const targetdir = path.join(dirTestProjects, TEST_NAME)

      const dialogs = [
        {
          pattern: /Init your project/,
          feeds: '\r'
        }
      ]

      await del([targetdir])
      await run(process.execPath, [hapbin, 'init', TEST_NAME, '--dsl=vue'], dialogs, {
        cwd: dirTestProjects
      })

      // setup env
      await run('lerna', ['bootstrap', '--no-ci'], [], { cwd: dirRepo })
      const nodeModulesFiles = await lsfiles('*', { cwd: path.resolve(targetdir, 'node_modules') })
      expect(nodeModulesFiles.length).toBeGreaterThan(0)

      await run('npm', ['run', 'build', '-- --include-dsl-from-lib'], [], { cwd: targetdir })

      const dsls = await lsfiles('dsl.js', { cwd: path.resolve(targetdir, 'build') })
      expect(dsls.length).toBe(1)

      const pages = JSON.parse(fs.readFileSync(path.resolve(targetdir, 'src/manifest.json'))).router
        .pages
      for (let i = 0, len = pages.length; i < len; i++) {
        const cssJsons = await lsfiles('index.css.json', {
          cwd: path.resolve(targetdir, 'build', pages[i])
        })
        expect(cssJsons.length).toBe(1)
      }

      await del([targetdir])
    },
    10 * 60 * 1000
  )

  it(
    'init and run server',
    async () => {
      const TEST_NAME = 'integration-auto-testapp-' + timestamp
      const targetdir = path.join(dirTestProjects, TEST_NAME)

      const dialogs = [
        {
          pattern: /init your project/i,
          feeds: '\r'
        }
      ]

      // init
      await del([targetdir])
      await run(process.execPath, [hapbin, 'init', TEST_NAME], dialogs, { cwd: dirTestProjects })
      const files = await lsfiles('**/{*,.*}', { cwd: targetdir })
      expect(files).toMatchSnapshot()

      const writedPkg = fs.readFileSync(path.join(targetdir, `package.json`), 'utf-8')
      const pkgInfo = JSON.parse(writedPkg)
      expect(pkgInfo.subversion.toolkit).toBe(packageInfo.version)
      expect(pkgInfo.devDependencies['hap-toolkit']).toBe('^' + packageInfo.version)

      // setup env
      await run('lerna', ['bootstrap', '--no-ci'], [], { cwd: dirRepo })
      const nodeModulesFiles = await lsfiles('*', { cwd: path.resolve(targetdir, 'node_modules') })
      expect(nodeModulesFiles.length).toBeGreaterThan(0)

      await run('npm', ['run', 'build'], [], { cwd: targetdir })
      const rpks = await lsfiles('*.rpk', { cwd: path.resolve(targetdir, 'dist') })
      expect(rpks.length).toBe(1)

      const pages = JSON.parse(fs.readFileSync(path.resolve(targetdir, 'src/manifest.json'))).router
        .pages
      for (let i = 0, len = pages.length; i < len; i++) {
        const cssJsons = await lsfiles('index.css.json', {
          cwd: path.resolve(targetdir, 'build', pages[i])
        })
        expect(cssJsons.length).toBe(1)
      }

      await run(
        'npm',
        ['run', 'server', '--', '--port', '9090'],
        [
          {
            pattern: output => {
              return output.match(/生成HTTP服务器的二维码: (http:\/\/.*)/)
            },
            feeds: (proc, output) => {
              const match = output.match(/生成HTTP服务器的二维码: (http:\/\/.*)/)
              const url = match[1]
              const p1 = fetch(url)
                .then(res => {
                  expect(res.status).toBe(200)
                  return res.text()
                })
                .then(text => {
                  expect(text).toMatch('<title>调试器</title>')
                })
              const p2 = fetch(url + '/qrcode')
                .then(res => res.arrayBuffer())
                .then(buffer => {
                  expect(Buffer.from(buffer).readUInt32BE(0)).toBe(0x89504e47)
                })
              Promise.all([p1, p2]).then(() => {
                proc.kill('SIGINT')
                proc.kill('SIGTERM')
              })
            }
          },
          {
            pattern: /listen EADDRINUSE: address already in use/,
            type: 'stderr',
            feeds: (proc, output) => {
              proc.kill('SIGINT')
              proc.kill('SIGTERM')
              throw new Error('address in use')
            }
          }
        ],
        { cwd: targetdir }
      )
      await del([targetdir])
    },
    30 * 60 * 1000
  )
})
