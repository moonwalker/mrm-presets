const { copyFiles, install, packageJson } = require('mrm-core');

const task = () => {
  install(['release-it'], { dev: false, exact: true });
  install(['dotenv'], { dev: true, exact: true });

  copyFiles(__dirname, [
    'config/release-it/common.js',
    'config/release-it/master.js',
    'config/release-it/branch.js',
    'config/release-it/release.js',
    'scripts/bump.sh',
    'scripts/release.sh',
  ]);

  // Update package.json
  const pkg = packageJson();

  pkg.setScript('bump', './scripts/bump.sh');
  pkg.setScript('release', './scripts/release.sh');
};

task.description = 'Generate release-it configuration';

module.exports = task;
