module.exports = {
    rules: {
        "include-copyright-header": require("./rules/copyright")
    },
    configs: {
        "babel": require("./babel"),
        "copyright": require("./copyright"),
        "javascript": require("./javascript"),
        "react": require("./react"),
        "typescript": require("./typescript"),
        "a11y": require("./a11y"),
    },
};
