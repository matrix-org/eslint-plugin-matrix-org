module.exports = {
    plugins: ["jest"],
    extends: ["plugin:jest/recommended"],
    rules: {
        "jest/no-standalone-expect": [
            "error",
            {
                additionalTestBlockFunctions: [
                    // Tested and assertions in `before`/`beforeEach` blocks will fail
                    // the test as expected
                    "before",
                    "beforeEach",
                ],
            },
        ],
        // It's ok to have no expect assertions in your test. Maybe you're testing that
        // things just don't blow up.
        "jest/expect-expect": "off",
    },
};
