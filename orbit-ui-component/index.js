const fs = require('fs');
const path = require('path');
const { lines } = require('mrm-core');
const { camelCase, upperFirst, template } = require('lodash');

const TEMPLATE_DIR = path.join(__dirname, 'templates');

const generateFile = (base, options) => {
  const { dir, slug, type } = options;

  const templatePath = path.join(TEMPLATE_DIR, `${base}.txt`);
  const compiled = template(fs.readFileSync(templatePath));

  lines(path.join(dir, base))
    .add(
      compiled({
        slug,
        type,
        componentName: upperFirst(camelCase(slug)),
        typeName: upperFirst(camelCase(type))
      })
    )
    .save();
};

const task = (config) => {
  const { src, slug, type } = config
    .defaults({ src: 'src' })
    .require('slug', 'type')
    .values();

  const componentDir = path.join(src, 'ui', slug);

  generateFile('index.js', {
    dir: componentDir,
    slug,
    type
  });

  generateFile('component.js', {
    dir: componentDir,
    slug,
    type
  });

  generateFile('stories.js', {
    dir: componentDir,
    slug,
    type
  });

  generateFile('style.styl', {
    dir: componentDir,
    slug,
    type
  });
};

task.description = 'Skeleton for an OrbitUI React Component';

module.exports = task;
