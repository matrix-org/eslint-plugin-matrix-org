module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": [
        ".",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        // Allow the use of underscore to show args are not used
        // This is helpful for seeing that a function implements
        // an interface but won't be using one of it's arguments.
        "@typescript-eslint/no-unused-vars": ["error", { "args": "none" }],
        "@typescript-eslint/no-empty-function": ["off"],

        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/ban-types": ["off"],
 
        // We use IProps and IState
        "@typescript-eslint/interface-name-prefix": ["off"],

        // typescript-eslint has rules for semis. eslint's causes conflict
        "semi": ["off"],

        // Seems like we're relying on ts' types and going with more adhoc
        // js docs as of late
        "valid-jsdoc": ["off"],

    }
}