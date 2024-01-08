require('dotenv').config();

module.exports = {
  git: {
    commit: true,
    // eslint-disable-next-line no-template-curly-in-string
    commitMessage: ':package: release ${version}\n[ci skip]',
    push: true,
    requireUpstream: false,
    tag: true,
    // eslint-disable-next-line no-template-curly-in-string
    tagName: 'v${version}'
  },
  github: {
    draft: false,
    release: false,
    autoGenerate: false,
    preRelease: false
  },
  npm: {
    publish: false,
    ignoreVersion: true,
    allowSameVersion: true
  }
};
