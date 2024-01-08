const config = require('./common');

module.exports = {
  ...config,
  git: {
    ...config.git,
    // eslint-disable-next-line no-template-curly-in-string
    commitMessage: ':package: release ${version}\n[ci skip]'
  },
  plugins: {
    ...config.plugins,
    '@release-it/conventional-changelog': {
      preset: 'angular'
    }
  }
};
