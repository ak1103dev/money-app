const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'A shared component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }
        return 'The name is required';
      },
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../src/components/{{properCase name}}/index.js',
      templateFile: './component/index.js.hbs',
      abortOnFail: true,
    },
    {
      type: 'add',
      path: '../src/components/{{properCase name}}/index.story.js',
      templateFile: './component/index.story.js.hbs',
      abortOnFail: true,
    },
  ],
};
