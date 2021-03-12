module.exports = {
    plugins: [
        "flowtype",
        "matrix-org",
    ],
    extends: "plugin:matrix-org/react",
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    rules: {
        // Flowtype
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

        // Bind or arrow functions in props causes performance issues (but we
        // currently use them in some places).
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
