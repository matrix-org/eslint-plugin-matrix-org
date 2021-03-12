module.exports = {
    plugins: [
        "matrix-org",
    ],
    extends: "plugin:matrix-org/react",
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    rules: {
        // Bind or arrow functions in props causes performance issues (but we
        // currently use them in some places).
        // It's disabled here, but we should using it sparingly.
        "react/jsx-no-bind": "off",
        "react/jsx-key": ["error"],
    },
}
