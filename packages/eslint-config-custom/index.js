module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/display-name': 'off',
    'react/jsx-key': 'off',
  },
}
