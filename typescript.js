module.exports = {
    plugins: [
        "@stylistic",
        "@typescript-eslint",
        "matrix-org",
    ],
    extends: [
        "plugin:matrix-org/javascript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@stylistic/disable-legacy",
    ],
    parser: "@typescript-eslint/parser",
    rules: {
        // Allow the use of underscore to show args are not used.
        // This is helpful for seeing that a function implements
        // an interface but won't be using one of it's arguments.
        "@typescript-eslint/no-unused-vars": ["error", { "args": "none", "ignoreRestSiblings": true }],
        "@stylistic/no-empty-function": ["off"],

        "@stylistic/explicit-module-boundary-types": ["off"],
        "@stylistic/ban-types": ["off"],

        // We use IProps and IState
        "@stylistic/interface-name-prefix": ["off"],

        // We rely on prettier for this
        "@stylistic/func-call-spacing": ["off"],

        // Require spaces after colons and around arrows
        "@stylistic/type-annotation-spacing": ["error"],

        "@stylistic/semi": ["error"],

        // Similarly, enforce semicolons between members (ie. in types / interfaces)
        "@stylistic/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "semi",
                "requireLast": true,
            },
            "singleline": {
                "delimiter": "semi",
                "requireLast": false,
            },
        }],

        // We're relying on TS types and going with more ad hoc JS docs
        "valid-jsdoc": ["off"],

        // Replace base ESLint's `no-invalid-this` with TS aware version
        "no-invalid-this": ["off"],
        "@typescript-eslint/no-invalid-this": ["error"],

        // XXX: for now the enum, enumMember, property and more have been disabled as there are too many violations
        "@typescript-eslint/naming-convention": ["error", {
            selector: [
                // "variableLike",
                // "property",
                "parameterProperty",
                "classMethod",
                "typeMethod",
                "classMethod",
                "typeMethod",
                "accessor",
            ],
            format: ["camelCase"],
            leadingUnderscore: "forbid",
        }, {
            selector: ["function", "parameter", "objectLiteralMethod"],
            format: ["camelCase", "PascalCase"],
            leadingUnderscore: "allow",
        }, {
            selector: [
                "class",
                "typeAlias",
                // "enum",
                // "enumMember",
                "typeParameter",
            ],
            format: ["PascalCase"],
            leadingUnderscore: "forbid",
            // }, {
            //     selector: "interface",
            //     format: ["PascalCase"],
            //     custom: {
            //         regex: "^I[A-Z]",
            //         match: true,
            //     },
        }],

        // Require method signatures to be explicit to help make signature changes more obvious in review
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "@typescript-eslint/explicit-member-accessibility": ["error"],

        // Require us to be more explicit about type conversions to help prevent bugs
        "@typescript-eslint/no-base-to-string": ["error"],

        // Prevent invalid non-type re-exports of types, these can cause downstream build failures
        "@typescript-eslint/consistent-type-exports": ["error"],

        // Prevent unnecessary runtime dependencies between files
        "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
    },
};
