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

- `react-component` - generate React component folder
- `orbit-ui-component` - generat Orbit UI React component folder

## Examples

### Generate react component folder

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
