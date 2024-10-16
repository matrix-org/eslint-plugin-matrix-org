module.exports = {
    plugins: [
        "deprecate",
        "matrix-org",
        "@stylistic",
        "react-hooks",
    ],
    extends: [
        "prettier",
        "plugin:@stylistic/disable-legacy",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        // handled by prettier
        "max-len": "off",

        // This just uses the React plugin to help ESLint known when
        // variables have been used in JSX
        "@stylistic/jsx-uses-vars": ["error"],
        // Don't mark React as unused if we're using JSX
        "@stylistic/jsx-uses-react": ["error"],

        // Components in JSX should always be defined
        "@stylistic/jsx-no-undef": ["error"],

        // Assert spacing before self-closing JSX tags, and no spacing before
        // or after the closing slash, and no spacing after the opening
        // bracket of the opening tag or closing tag.
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-tag-spacing.md
        "@stylistic/jsx-tag-spacing": ["error", {
            beforeClosing: "never",
        }],

        "@stylistic/jsx-curly-spacing": ["error", "never", { allowMultiline: true }],

        "@stylistic/jsx-curly-brace-presence": ["error", "never"],

        "@stylistic/jsx-equals-spacing": ["error", "never"],

        "@stylistic/no-direct-mutation-state": ["error"],
        "@stylistic/no-this-in-sfc": ["error"],
        "@stylistic/self-closing-comp": ["error"],
        "@stylistic/jsx-max-props-per-line": ["error", { "when": "multiline" }],

        "react-hooks/rules-of-hooks": ["error"],
        "react-hooks/exhaustive-deps": ["error"],
        "@stylistic/no-unknown-property": ["error"],

        "deprecate/import": [
            "error",
            {
                name: "enzyme",
                use: "@testing-library/react",
            },
            {
                name: "react-dom/test-utils",
                use: "@testing-library/react",
            },
        ],
    },
};
