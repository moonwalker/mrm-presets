# [mrm](https://github.com/sapegin/mrm) presets for :moon: :walking:

[![](https://img.shields.io/npm/v/@moonwalker/mrm-presets.svg)](https://www.npmjs.com/package/@moonwalker/mrm-presets)
![](https://badges.renovateapi.com/github/moonwalker/mrm-presets)

## Install

```shell
# Install mrm globally if need it
npm i -g mrm

# Install presets package
npm i -g @moonwalker/mrm-presets

```

## Presets

- [`react-component`](#react-component)
- `orbit-ui-component`
- [`release-it`](#release-it)
- [`pre-flight-check`](#pre-flight-check)

## react-component

Generate React component folder

```shell
mrm react-component --preset @moonwalker/mrm-presets --config:slug top-navigation --config:prefix components/signup

// Running react-component...
// Create src/components/signup/top-navigation/index.js
// Create src/components/signup/top-navigation/top-navigation.component.js
// Create src/components/signup/top-navigation/top-navigation.stories.js
// Create src/components/signup/top-navigation/top-navigation.styl
```

Run the generator in the current dirrectory:

```shell
cd src/components
mrm react-component --preset @moonwalker/mrm-presets --config:slug top-navigation --config:cwd . --config:prefix signup

// Running react-component...
// Create src/components/signup/top-navigation/index.js
// Create src/components/signup/top-navigation/top-navigation.component.js
// Create src/components/signup/top-navigation/top-navigation.stories.js
// Create src/components/signup/top-navigation/top-navigations.styl
```

## release-it

Custom release flow based on [release-it](https://github.com/release-it/release-it).

Usage:
```shell
yarn bump
```

or
```shell
npm run bump
```

### How is working

When running `bump` command, `release-it` will do the following steps locally:

1. set a new package version
  - on master, a new semver version will be inferred based on [Angular conventional changelog format](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-angular/README.md)
  - on a branch, a new beta tag will be generated

  The version can be manually set by choosing the custom version option.

2. tag the commit
3. push the code & tags
4. create a Github release(`GITHUB_TOKEN` required)

CI will run the publish flow for tagged commits.

## pre-flight-check

Add linting & formatting configs for [@moonwalker/pre-flight-check](https://github.com/moonwalker/pre-flight-check)

#### How is working
[lint-staged](https://www.npmjs.com/package/lint-staged) is running [Prettier](https://www.npmjs.com/package/prettier) and [Eslint](https://www.npmjs.com/package/eslint) before commit. If there are eslint errors, the commit will stop.

To skip the check entirely, you can use `git commit --no-verify`.
