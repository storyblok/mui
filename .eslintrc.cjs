module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'eslint:recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'prettier',
        'prefer-arrow',
        'functional'
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        'no-var': 'error',
        'prettier/prettier': ['warn'],
        'prefer-arrow/prefer-arrow-functions': 'error',
        'functional/immutable-data': 'error',
        'functional/no-let': 'error',
        'functional/no-class': 'error',
        'functional/no-mixed-type': 'error',
        'functional/no-this-expression': 'error',
        'functional/no-loop-statement': 'error',
        'functional/no-promise-reject': 'error',
        'no-unused-vars': [
            'warn',
            {
                args: "none",
                "ignoreRestSiblings": true ,
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
    },
    overrides: [{
        "files": [ "*.stories.tsx", "*.stories.jsx", ],
        "rules": {
            "functional/immutable-data": 'off',
        }
    }]
}
