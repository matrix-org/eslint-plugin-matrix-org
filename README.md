# eslint-plugin-matrix-org

`eslint-plugin-matrix-org` contains ESLint rules and configs used by Matrix.org
projects. It codifies
https://github.com/matrix-org/matrix-react-sdk/blob/develop/code_style.md.

This package contains five ESLint configs:

- `matrix-org/javascript`: The style for JavaScript projects.
- `matrix-org/react`: The style for React projects. Intended to be used in
  conjunction with `matrix-org/javascript` or `matrix-org/typescript`.
- `matrix-org/legacy`: The style adhered to by established projects before ES6,
  namely `matrix-js-sdk`. It extends `matrix-org/javascript`.
  DEPRECATED - DO NOT USE
- `matrix-org/react-legacy`: Styling for React projects using Flowtype instead
  of TypeScript. Intended to be phased out. It extends `matrix-org/react`.
  DEPRECATED - DO NOT USE
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
