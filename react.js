module.exports = {
    plugins: [
      "react",
      "react-hooks",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        // Overides matrix's max length, which makes sense when writing nested 
        // jsx
        "max-len": ["warn", {
            // Ignore pure jsx lines
            ignorePattern: '^\\s*<',
            ignoreComments: true,
            code: 120,
        }],

        // This just uses the react plugin to help eslint known when
        // variables have been used in JSX
        "react/jsx-uses-vars": ["error"],
        // Don't mark React as unused if we're using JSX
        "react/jsx-uses-react": ["error"],

        // Components in JSX should always be defined.
        "react/jsx-no-undef": ["error"],

        // Assert spacing before self-closing JSX tags, and no spacing before
        // or after the closing slash, and no spacing after the opening
        // bracket of the opening tag or closing tag.
        //
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-tag-spacing.md
        "react/jsx-tag-spacing": ["error"],

        "react-hooks/rules-of-hooks": ["error"],
        "react-hooks/exhaustive-deps": ["error"],
    }
}
