const { copyFiles, install, lines, packageJson } = require('mrm-core');

const task = () => {
  install(['release-it'], { dev: true, exact: true });
  install(['@release-it/conventional-changelog'], { dev: true, exact: true });
  install(['dotenv'], { dev: true, exact: true });

  copyFiles(__dirname, [
    'config/release-it/common.js',
    'config/release-it/master.js',
    'config/release-it/branch.js',
    'config/release-it/release.js',
    'scripts/bump.sh',
    'scripts/release.sh'
  ]);

  // Update scripts
  packageJson()
    .setScript('bump', './scripts/bump.sh')
    .setScript('release', './scripts/release.sh')
    .save();

  // Add .env and GITHUB_TOKEN
  lines('.gitignore')
    .remove('.env')
    .add('.env')
    .save();

  // add to .npmignore only if the file exists
  const npmIgnoreFile = lines('.npmignore');

  if (npmIgnoreFile.exists()) {
    npmIgnoreFile
      .remove('.env')
      .set(['.env'])
      .save();
  }

  lines('.env')
    .add(['# GITHUB_TOKEN='])
    .save();
};

task.description = 'Generate release-it configuration';

module.exports = task;
