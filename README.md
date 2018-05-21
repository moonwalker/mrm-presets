# Mrm preset for Moonwalkers

## Install

```shell

npm i -g mrm
npm i -g @moonwalker/mrm-preset-react

```

## Usage

```shell
mrm react-component --preset @moonwalker/mrm-preset-react --config:slug top-navigation --config:prefix components/signup

// Running react-component...
// Create src/components/signup/top-navigation/index.js
// Create src/components/signup/top-navigation/top-navigation.component.js
// Create src/components/signup/top-navigation/top-navigation.stories.js
// Create src/components/signup/top-navigation/top-navigation.styl
```

Run the generator in the current dirrectory:

```shell
cd src/components
mrm react-component --preset @moonwalker/mrm-preset-react --config:slug top-navigation --config:cwd . --config:prefix signup

// Running react-component...
// Create src/components/signup/top-navigation/index.js
// Create src/components/signup/top-navigation/top-navigation.component.js
// Create src/components/signup/top-navigation/top-navigation.stories.js
// Create src/components/signup/top-navigation/top-navigations.styl
```
