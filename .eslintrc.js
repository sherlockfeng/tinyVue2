module.exports = {
    root: true,
    env: {
        node: true
    },
    globals: {
        System: 'readonly'
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}]
    }
};
