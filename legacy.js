/*
 * This is mostly intended for compatibility with `matrix-js-sdk`.
 * It has instances where these warnings are triggered.
 * New code is kept lint free by setting the max number of warnings to a
 * specific threshold, and evetually we should drive that to 0.
 */

module.exports = {
    extends: ".",

    rules: {
        "no-var": ["warn"],
        "prefer-rest-params": ["warn"],
        "prefer-spread": ["warn"],
        "one-var": ["warn"],
        "padded-blocks": ["warn"],
        "no-extend-native": ["warn"],
        "camelcase": ["warn"],
        "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always",
        }],
        "arrow-parens": "off",
    }
}
