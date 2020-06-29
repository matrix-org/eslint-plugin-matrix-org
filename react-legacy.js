module.exports = {
    extends: "./react",
    plugins: [
        "flowtype",
    ],
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    rules: {
        /** flowtype **/
        "flowtype/require-parameter-type": ["warn", {
            "excludeArrowFunctions": true,
        }],
        "flowtype/define-flow-type": "warn",
        "flowtype/require-return-type": ["warn",
            "always",
            {
              "annotateUndefined": "never",
              "excludeArrowFunctions": true,
            }
        ],
        "flowtype/space-after-type-colon": ["warn", "always"],
        "flowtype/space-before-type-colon": ["warn", "never"],

        // bind or arrow function in props causes performance issues
        // (but we currently use them in some places)
        // It's disabled here, but we should using it sparingly.
        "react/jsx-no-bind": "off",
        "react/jsx-key": ["error"],
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true
        },
    },
}
