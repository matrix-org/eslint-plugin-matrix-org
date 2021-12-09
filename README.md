# eslint-plugin-matrix-org

`eslint-plugin-matrix-org` contains ESLint rules and configs used by Matrix.org
projects. It codifies
https://github.com/matrix-org/matrix-react-sdk/blob/develop/code_style.md.

This package contains several main ESLint configs for different project styles:

- `matrix-org/javascript`: The style for native JavaScript projects.
- `matrix-org/babel`: The style for Babel JavaScript projects. It extends
  `matrix-org/javascript`.
- `matrix-org/typescript`: The style for TypeScript projects. It extends
  `matrix-org/javascript`.

There is also a mixin config that can be used together with any of the above:

- `matrix-org/react`: The style for React projects.

# Getting started

Add this package as a development dependency:

```
yarn add eslint-plugin-matrix-org --dev
```

You can then add any of the following to your ESLint config:

Standard native JavaScript
```js
{
    plugins: [
        "matrix-org",
    ],
    extends: [
        "plugin:matrix-org/javascript",
    ]
}
```

Standard Babel JavaScript
```js
{
    plugins: [
        "matrix-org",
    ],
    extends: [
        "plugin:matrix-org/babel",
    ]
}
```

Standard TypeScript
```js
{
    plugins: [
        "matrix-org",
    ],
    extends: [
        "plugin:matrix-org/typescript",
    ]
}
```

Standard native JavaScript with React
```js
{
    plugins: [
        "matrix-org",
    ],
    extends: [
        "plugin:matrix-org/javascript",
        "plugin:matrix-org/react",
    ]
}
```

Standard Babel JavaScript with React
```js
{
    plugins: [
        "matrix-org",
    ],
    extends: [
        "plugin:matrix-org/babel",
        "plugin:matrix-org/react",
    ]
}
```

Standard TypeScript with React
```js
{
    plugins: [
        "matrix-org",
    ],
    extends: [
        "plugin:matrix-org/typescript",
        "plugin:matrix-org/react",
    ]
}
```

This package does not hold any dependencies itself, as it causes conflicts the
versions of the same dependencies downstream and also would imply installing the
union of all tools. You should expect that you may need to add some of the
following depending on the configs you enable:

* @babel/core
* @babel/eslint-parser
* @babel/eslint-plugin
* @typescript-eslint/eslint-plugin
* @typescript-eslint/parser
* eslint
* eslint-config-google
* eslint-plugin-react
* eslint-plugin-react-hooks
* eslint-plugin-import
* typescript
