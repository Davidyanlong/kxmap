module.exports = {
  globals: {
    "THREE": true,
},
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
},
// extends: [
//   require.resolve('@4dst-saas/rules-preset/with-ts-recommended.js'),
// ],
parser: '@typescript-eslint/parser',
parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
},
plugins: ['@typescript-eslint',"unused-imports"],
rules: {
    "unused-imports/no-unused-imports": "error",
    '@typescript-eslint/no-loss-of-precision':0,
    '@typescript-eslint/no-inferrable-types': 0,
    'no-constant-condition': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-empty-function': 0,
    'no-prototype-builtins': 0,
    'no-case-declarations': 0,
    'no-useless-catch': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any':0,
    'prefer-rest-params':0,
    "semi":[0,'never'],
    "prefer-const": 0,
    "object-curly-newline": 0,
    "import/prefer-default-export": 0,
    'no-tabs': 0,
    "no-restricted-syntax": 0,
    "no-confusing-arrow": 0,
    "implicit-arrow-linebreak": 0,
    "function-paren-newline": 0,
    "@typescript-eslint/quotes": 0,
    "prefer-destructuring": 0,
    "no-use-before-define": 0,
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": 0,
    'operator-linebreak': 0,
    "no-continue": 0,
    "no-shadow": 0,
    "@typescript-eslint/no-shadow": 0,
    "no-bitwise": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "no-restricted-globals": [0, "event", "self"]
},
settings: {
  'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
  },
  'import/resolver': {
      typescript: {
          alwaysTryTypes: true,
      },
  },
}
};

