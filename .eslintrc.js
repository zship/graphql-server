module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    node: true,
  },
  rules: {
    curly: ['error', 'all'],
    semi: ['error', 'never'],
    quotes: ['error', 'single', { 'avoidEscape': true }],
    // overrides of airbnb rules
    // -------------------------

    // require functions to have names, *unless they can be derived* (which is most of the time)
    'func-names': ['error', 'as-needed'],

    // Use Stroustrup-style braces because I find them easier to edit in a linewise editor (Vim)
    // 'brace-style': ['error', 'stroustrup'],

    // allow `i++` at the end of `for` loops, otherwise "no unary operators"
    // seems sensible enough
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // I like to use braces in arrow functions when the indentation will make
    // more sense to me. Turn off airbnb's default of 'as-needed'.
    'arrow-body-style': 'off',

    'quote-props': 'off',

    // sometimes the object shorthand for methods is less readable, and also
    // makes syntax like `prop: async function() {...` impossible. Change
    // airbnb's default of 'always' to just 'properties'.
    'object-shorthand': ['error', 'properties'],

    'no-debugger': 'warn',

    // overrides of eslint defaults
    // ----------------------------
    'no-shadow': 'off',

    // I find it clearer to wrap all of my if-else's, regardless of whether or
    // not they return
    'no-else-return': 'off',

    // using `await` in loops is kinda nice since it lets you execute Promises
    // serially.
    'no-await-in-loop': 'off',
  },
}
