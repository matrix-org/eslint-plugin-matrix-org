# eslint-config-matrix-org

`eslint-config-matrix-org` contains ESLint rules and configs used by Matrix.org
projects. It codifies
https://github.com/matrix-org/matrix-react-sdk/blob/develop/code_style.md.

This package contains five ESLint configs:

- `matrix-org`: The style for JS projects.
- `matrix-org/react`: The style for React projects. Intended to be used in
  conjunction with `matrix-org` or `matrix-org/ts`.
- `matrix-org/legacy`: The style adhered to by established projects before ES6,
  namely `matrix-js-sdk`. It extends `matrix-org`. DEPRECATED - DO NOT USE
- `matrix-org/react-legacy`: Styling for React projects using Flowtype instead
  of TS. Intended to be phased out. It extends `matrix-org/react`. DEPRECATED -
  DO NOT USE
- `matrix-org/ts`: The style for TS projects. It extends `matrix-org`.

# Development

To test it out, in this repo run:
```
yarn link
```

In the target repo run:
```
yarn link eslint-config-matrix-org
```

And add any of the following to your ESLint config:

Standard JS style
```js
{
    extends: [
        "matrix-org",
    ]
}
```

Standard TS style
```js
{
    extends: [
        "matrix-org/ts",
    ]
}
```

Standard JS with React
```js
{
    extends: [
        "matrix-org",
        "matrix-org/react",
    ]
}
```

Standard TS with React
```js
{
    extends: [
        "matrix-org/ts",
        "matrix-org/react",
    ]
}
```
