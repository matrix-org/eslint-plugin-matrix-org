# Cutting releases

`eslint-plugin-matrix-org` is pulished on npm

To cut a new release:
1. Ensure all changes are merged and that `main` is locally updated.
2. Ensure you're logged in as the `matrixdotorg` npm user (for at least the project). `npm whoami` will tell you this.
3. Run `npm version 0.5.3` (using a suitable version according to semver).
4. Push `main` and the created `v0.5.3` tag
5. Run `npm publish` to update npm
