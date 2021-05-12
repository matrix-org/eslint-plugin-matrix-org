# eslint-plugin-matrix-org

`eslint-plugin-matrix-org` contains ESLint rules and configs used by Matrix.org
projects. It codifies
https://github.com/matrix-org/matrix-react-sdk/blob/develop/code_style.md.

This package contains several ESLint configs:

- `matrix-org/javascript`: The style for JavaScript projects.
- `matrix-org/react`: The style for React projects. Intended to be used in
  conjunction with `matrix-org/javascript` or `matrix-org/typescript`.
- `matrix-org/typescript`: The style for TypeScript projects. It extends
  `matrix-org/javascript`.

# Getting started

Add this package as a development dependency:

```
yarn add eslint-plugin-matrix-org --dev
```

You can then add any of the following to your ESLint config:

Standard JavaScript style
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

Standard TypeScript style
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

Standard JavaScript with React
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
* eslint-config-google
* eslint-plugin-react
* eslint-plugin-react-hooks
* typescript
