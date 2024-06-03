import changeToken from './tools/changeToken.js'

const plugin = {
  meta: {
    name: 'rd-eslint-plugin',
    version: '1.0.0',
  },
  config: {},
  rules: {
    'changeToken': changeToken()
  },
  processors: {}
}

export default plugin