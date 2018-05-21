const fs = require('fs');
const path = require('path');
const { lines } = require('mrm-core');
const { camelCase, upperFirst, template } = require('lodash');

const TEMPLATE_DIR = path.join(__dirname, 'templates');

const generateFile = (filename, options) => {
  const {
    dir,
    slug,
    prefix,
    container,
  } = options;

  const templatePath = path.join(TEMPLATE_DIR, `${filename}.txt`);
  const compiled = template(fs.readFileSync(templatePath));

  const outputFilename = options.outputFilename || filename;

  lines(path.join(dir, outputFilename))
    .add(compiled({
      componentName: upperFirst(camelCase(slug)),
      componentSlug: slug,
      storyPrefix: prefix.split('/').map(i => upperFirst(camelCase(i))).join('/'),
      container,
    }))
    .save();
};

const task = (mrmConfig) => {
  const defaultConfig = {
    cwd: process.cwd(),
    container: false,
  };

  const {
    cwd,
    slug,
    prefix,
    container,
  } = mrmConfig.defaults(defaultConfig).require('slug', 'prefix').values();

  const componentDir = path.join(cwd, prefix, slug);

  generateFile('index.js', {
    dir: componentDir,
    slug,
    prefix,
    container,
  });

  generateFile('component.js', {
    dir: componentDir,
    outputFilename: `${slug}.component.js`,
    slug,
    prefix,
    container,
  });

  generateFile('stories.js', {
    dir: componentDir,
    outputFilename: `${slug}.stories.js`,
    slug,
    prefix,
    container,
  });

  if (container) {
    generateFile('container.js', {
      dir: componentDir,
      outputFilename: `${slug}.container.js`,
      slug,
      prefix,
      container,
    });
  }

  generateFile('style.styl', {
    dir: componentDir,
    outputFilename: `${slug}.styl`,
    slug,
    prefix,
    container,
  });
};

task.description = 'Skeleton for a React Component';

module.exports = task;
