/** @type {import('prettier').config} */
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'always',
  jsxSingleQuote: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')]
};
