module.exports = {
    extends: ["eslint:recommended", "google"],

    parser: "babel-eslint", // Needed for class properties
    parserOptions: {
        sourceType: "module",
    },

    env: {
        // We expect all projects to use es6 or newer
        es6: true,
        jest: true,
    },

    plugins: [
      "babel",
    ],

    rules: {
        /*
         * Additional rules we adhere to
         */
        "indent": [
          "error",
          4,
          { 
            SwitchCase: 1,
            ArrayExpression: "off",
            ObjectExpression: "off",
          },
        ],
        "max-len": ["error", {
            code: 120,
            ignoreComments: true,
        }],
        curly: ["error", "multi-line"],
        "prefer-const": ["error"],
        "comma-dangle": ["error", {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "always-multiline",
        }],
        "arrow-parens": ["off"],

        // loosen jsdoc requirements a little
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

        /*
         * rules we do not want from eslint-recommended
         */
        "no-console": ["off"],
        "no-empty": ["error", { "allowEmptyCatch": true }],
        "no-useless-catch": ["off"],
        "no-prototype-builtins": ["off"],

        /*
         * rules we do not want from the google styleguide
         */
        "object-curly-spacing": ["off"],
        "spaced-comment": ["off"],
        "guard-for-in": ["off"],
        "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
        "block-spacing": ["off"],
        "operator-linebreak": ["off"],
        // We don't mind strange alignments in eol comments
        "no-multi-spaces": ["error", { "ignoreEOLComments": true }],

        // eslint's built in no-invalid-this rule breaks with class properties
        "no-invalid-this": "off",
        // so we replace it with a version that is class property aware
        "babel/no-invalid-this": "error",
    },
}
