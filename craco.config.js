require('dotenv-cra').config() // https://github.com/gsoft-inc/craco/issues/180

const {
  CracoAppLessPlugin,
  CracoTheme,
  CracoWasm,
  CracoSilence,
  CracoCompatibility,
} = require('@sentre/craco-plugins')

module.exports = {
  plugins: [
    {
      plugin: CracoAppLessPlugin,
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
