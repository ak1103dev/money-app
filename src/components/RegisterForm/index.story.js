import React from 'react';
import { storiesOf } from '@storybook/react';

import RegisterForm from './index';

function buildStory(attrs) {
  const props = {
    ...attrs,
  };

  return <RegisterForm {...props} />;
}

storiesOf('RegisterForm', module)
  .addDecorator(story => <div className="list-items">{story()}</div>)
  .add('default', () => buildStory({}));
