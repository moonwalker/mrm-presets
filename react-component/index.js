const fs = require('fs');
const path = require('path');
const { lines } = require('mrm-core');
const { camelCase, upperFirst, template } = require('lodash');

const TEMPLATE_DIR = path.join(__dirname, 'templates');

const generateFile = (base, options) => {
  const { dir, slug, prefix } = options;

  const templatePath = path.join(TEMPLATE_DIR, `${base}.txt`);
  const compiled = template(fs.readFileSync(templatePath));

  lines(path.join(dir, base))
    .add(compiled({
      slug,
      prefix,
      componentName: upperFirst(camelCase(slug)),
      storyPrefix: prefix.split('/').map(i => upperFirst(camelCase(i))).join('/'),
    }))
    .save();
};

const task = (config) => {
  const { src, slug, prefix } = config.defaults({ src: 'src' }).require('slug', 'prefix').values();

  const componentDir = path.join(src, prefix, slug);

  generateFile('index.js', {
    dir: componentDir,
    slug,
    prefix,
  });

  generateFile('component.js', {
    dir: componentDir,
    slug,
    prefix,
  });

  generateFile('stories.js', {
    dir: componentDir,
    slug,
    prefix,
  });

  generateFile('style.styl', {
    dir: componentDir,
    slug,
    prefix,
  });
};

task.description = 'Skeleton for a React Component';

module.exports = task;
