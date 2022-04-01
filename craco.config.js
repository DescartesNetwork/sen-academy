require('dotenv-cra').config() // https://github.com/gsoft-inc/craco/issues/180

const { CracoLessPlugin } = require('./plugins/craco-less')
const CracoTheme = require('./plugins/craco-theme')
const CracoWasm = require('./plugins/craco-wasm')
const CracoSilence = require('./plugins/craco-silence')
const CracoCompatibility = require('./plugins/craco-compatibility')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              '@ant-prefix': 'sen-academy',
            },
          },
        },
      },
    },
    {
      plugin: CracoTheme,
      options: {
        theme: ['light', 'dark'],
      },
    },
    {
      plugin: CracoCompatibility,
    },
    {
      plugin: CracoWasm,
    },
    {
      plugin: CracoSilence,
    },
  ],
}
