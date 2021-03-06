const path = require('path');
const { copyFiles, install, packageJson } = require('mrm-core');

const task = () => {
  install(['@moonwalker/pre-flight-check'], { dev: true, exact: true });

  copyFiles(path.join(__dirname, 'configs'), [
    '.eslintignore',
    '.eslintrc.js',
    '.huskyrc.js',
    '.prettierignore',
    'prettier.config.js',
    'stylelint.config.js',
    'lint-staged.config.js'
  ]);

  // Update scripts
  packageJson()
    .setScript('format', 'prettier --write "**/*.{js,jsx}"')
    .setScript('lint', 'eslint . --ext js,jsx')
    .save();
};

task.description = 'Generate release-it configuration';

module.exports = task;
