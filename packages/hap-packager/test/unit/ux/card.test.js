/*
 * Copyright (C) 2018, hapjs.org. All rights reserved.
 */

'use strict'
const path = require('path')
const sinon = require('sinon')
const { $jscript, $fun2str, resolveEntries, compileFiles } = require('../../utils')

/**
 * Component
 */
describe('Card编译测试', () => {
  const basedir = path.resolve(__dirname, '../../case/ux/')
  const entries = resolveEntries(basedir, 'TestCard')

  beforeAll(() => {
    return compileFiles(entries)
  }, 30000)

  function $expect(jsfile) {
    const components = {}
    const requireStub = sinon.stub()
    const $app_bootstrap$ = sinon.stub()
    const $app_define$ = function(componentName, deps, factory) {
      if (components[componentName]) {
        throw new Error(`${componentName} 被重复定义`)
      }

      var $app_require$ = requireStub
      var $app_exports$ = {}
      var $app_module$ = { exports: $app_exports$ }

      factory($app_require$, $app_exports$, $app_module$)
      components[componentName] = $app_module$.exports.template
    }
    const code = $jscript(jsfile)
    const fn = new Function('$app_define$', '$app_bootstrap$', code)
    fn($app_define$, $app_bootstrap$)

    expect($fun2str(components)).toMatchSnapshot()
  }

  const testTable = Object.keys(entries).map(file => {
    let name = file.split('/')[1]
    name = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    return [name, file]
  })

  it.each(testTable)('%s', (_, file) => {
    $expect(file)
  })
})
