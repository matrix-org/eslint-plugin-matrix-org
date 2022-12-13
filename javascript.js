module.exports = {
    plugins: ["import", "unicorn"],
    extends: [
        "eslint:recommended",
        "google",
        "prettier",
    ],
    rules: {
        // Additional rules we adhere to
        
        // handled by prettier
        "indent": "off",
        "space-before-function-paren": "off",
        "brace-style": "off",
        "max-len": "off",

        "curly": ["error", "multi-line"],
        "prefer-const": ["error"],
        "comma-dangle": ["error", {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "always-multiline",
        }],
        "arrow-spacing": ["error"],
        "space-in-parens": ["error"],

        // Loosen JSDoc requirements a little
        "require-jsdoc": ["error", {
            require: {
                FunctionDeclaration: false,
            }
        }],
        "valid-jsdoc": ["error", {
            requireParamDescription: false,
            requireReturn: false,
            requireReturnDescription: false,
        }],

        // Rules we do not want from ESLint's recommended set
        "no-console": ["off"],
        "no-empty": ["error", { "allowEmptyCatch": true }],
        "no-useless-catch": ["off"],
        "no-prototype-builtins": ["off"],

        // Rules we do not want from the Google style guide
        "spaced-comment": ["off"],
        "guard-for-in": ["off"],
        "block-spacing": ["off"],
        "operator-linebreak": ["off"],
        // We don't mind strange alignments in EOL comments
        "no-multi-spaces": ["error", { "ignoreEOLComments": true }],

        "no-multiple-empty-lines": ["error", { "max": 1 }],

        "import/order": [
            "error", {
                "groups": [["builtin", "external"], ["internal", "parent", "sibling", "index", "object", "type"]],
                "newlines-between": "always",
            },
        ],
        "import/first": "error",
        "unicorn/no-instanceof-array": "error",

        "quotes": ["error", "double", { avoidEscape: true }],
        "object-curly-spacing": ["error", "always"],
        "arrow-parens": ["error", "always"],
    },
}
