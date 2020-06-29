# eslint-config-matrix-org

eslint-config-matrix-org is the ideal style adhered to by matrixorg projects.

It codifies https://github.com/matrix-org/matrix-react-sdk/blob/develop/code_style.md

This package contains five styles:

- `matrixorg`: The style for js projects.
- `matrixorg/react`: The style for react based projects. Intended to be used in conjunction with `matrixorg` or `matrixorg/ts`.
- `matrixorg/legacy`: The style adhered to by established projects making use pre es6, namely `matrix-js-sdk`. It extends `matrixorg`. DEPRECATED - DO NOT USE
- `matrixorg/react-legacy`: Styling for react projects using flowtype instead of ts. Intended to be phased out. It extends `matrixorg/react`. DEPRECATED - DO NOT USE
- `matrixorg/ts`: The style for ts projects. It extends `matrixorg`.


# Development

To test it out

In this repo run:
```
yarn link
```

In the target repo run:
```
yarn link eslint-config-matrix-org
```

And add any of the following to your eslint:

Standard js style
```js
{
    extends: [
        "matrix-org",
    ]
}
```

Standard ts style
```js
{
    extends: [
        "matrix-org/ts",
    ]
}
```

Standard js with react
```js
{
    extends: [
        "matrix-org",
        "matrix-org/react",
    ]
}
```

Standard ts with react
```js
{
    extends: [
        "matrix-org/ts",
        "matrix-org/react",
    ]
}
```
