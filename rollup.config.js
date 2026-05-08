import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import _banner from 'rollup-plugin-banner'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import ts from 'typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { inlineParser } from './scripts/plugins.mjs'

const banner = _banner.default
console.log(banner)
const FORMAT = process.env.FORMAT
const IS_TEST_ENV = process.env.NODE_ENV === 'test'
const DIST_FILE_NAME = 'index'
const TEST_DIR = '__test__'
const DIST_DIR = 'dist'
const UMD_NAME = 'SVGA'
const RESOLVE_EXTENSIONS = ['.mjs', '.js', '.json', '.node', '.ts']
let hasEmittedDeclarations = false

function loadTSConfig (tsconfig) {
  const configFile = ts.readConfigFile(tsconfig, ts.sys.readFile)
  if (configFile.error !== undefined) {
    throw new Error(ts.flattenDiagnosticMessageText(configFile.error.messageText, '\n'))
  }
  return ts.parseJsonConfigFileContent(configFile.config, ts.sys, process.cwd())
}

function reportTSDiagnostics (diagnostics) {
  const errors = diagnostics.filter(diagnostic => diagnostic.category === ts.DiagnosticCategory.Error)
  if (errors.length === 0) return
  const message = ts.formatDiagnosticsWithColorAndContext(errors, {
    getCanonicalFileName: fileName => fileName,
    getCurrentDirectory: () => process.cwd(),
    getNewLine: () => '\n'
  })
  throw new Error(message)
}

function emitDeclarations (tsconfig) {
  if (IS_TEST_ENV || hasEmittedDeclarations) return
  hasEmittedDeclarations = true
  const parsedConfig = loadTSConfig(tsconfig)
  const options = {
    ...parsedConfig.options,
    declaration: true,
    emitDeclarationOnly: true,
    outDir: DIST_DIR,
    noEmit: false
  }
  const program = ts.createProgram(parsedConfig.fileNames, options)
  const emitResult = program.emit()
  reportTSDiagnostics(ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics))
}

function typescript (options) {
  const parsedConfig = loadTSConfig(options.tsconfig)
  const compilerOptions = {
    ...parsedConfig.options,
    declaration: false,
    noEmit: false,
    sourceMap: false,
    module: ts.ModuleKind.ESNext
  }

  return {
    name: 'typescript-transpile',
    buildStart () {
      emitDeclarations(options.tsconfig)
    },
    transform (code, id) {
      if (!/\.[cm]?tsx?$/.test(id)) return null
      const result = ts.transpileModule(code, {
        fileName: id,
        compilerOptions,
        reportDiagnostics: true
      })
      reportTSDiagnostics(result.diagnostics ?? [])
      return {
        code: result.outputText,
        map: null
      }
    }
  }
}

const babelOutputPlugin = getBabelOutputPlugin({
  allowAllFormats: true,
  comments: false,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'Android >= 4.4',
            'iOS >= 9.0'
          ]
        }
      }
    ]
  ]
})

const config = [
  {
    onwarn () {},
    input: IS_TEST_ENV ? 'src/test.ts' : 'src/index.ts',
    output: {
      file: IS_TEST_ENV ? `${TEST_DIR}/${DIST_FILE_NAME}.js` : `${DIST_DIR}/${DIST_FILE_NAME}${FORMAT === 'umd' ? '' : `.${FORMAT}`}.min.js`,
      format: FORMAT,
      name: UMD_NAME,
      sourcemap: false
    },
    plugins: [
      resolve({ jsnext: true, preferBuiltins: true, browser: true, extensions: RESOLVE_EXTENSIONS }),
      commonjs(),
      typescript({
        tsconfig: IS_TEST_ENV ? 'tsconfig.test.json' : 'tsconfig.json'
      }),
      babelOutputPlugin,
      IS_TEST_ENV && serve(TEST_DIR),
      IS_TEST_ENV && livereload({
        delay: 810,
        watch: TEST_DIR,
        verbose: false
      }),
      !IS_TEST_ENV && terser(),
      !IS_TEST_ENV && banner('SVGA.Lite v<%= pkg.version %>'),
      IS_TEST_ENV && inlineParser
    ]
  }
]

if (IS_TEST_ENV || FORMAT === 'umd') {
  config.unshift({
    onwarn () {},
    input: 'src/parser/index.ts',
    output: {
      file: IS_TEST_ENV ? `${TEST_DIR}/parser.js` : `${DIST_DIR}/parser.js`,
      format: 'iife'
    },
    plugins: [
      resolve({ jsnext: true, preferBuiltins: true, browser: true, extensions: RESOLVE_EXTENSIONS }),
      commonjs(),
      typescript({
        tsconfig: IS_TEST_ENV ? 'tsconfig.test.json' : 'tsconfig.json'
      }),
      babelOutputPlugin,
      !IS_TEST_ENV && terser(),
      IS_TEST_ENV && inlineParser
    ]
  })
}

export default config
