const CracoLessPlugin = require('craco-less');
const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  // 这里可以添加覆盖webpack配置
  webpack: {
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
      // 此处是一个示例，实际可根据各自需求配置
    }
  },
  // 修改bable配置
  babel: {
    plugins: [
      // babel-plugin-import 按需引入
      ['import', { libraryName: 'antd', style: true }],
    ]
  },
  plugins: [
    {
      // craco-less修改antd的主题样式
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'red' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};