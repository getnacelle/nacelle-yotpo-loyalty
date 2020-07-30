module.exports = {
  root: true,
  env: { 'es6': true },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'arrow-parens': 0
  }
}
