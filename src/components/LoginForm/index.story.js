import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginForm from './index';

function buildStory(attrs) {
  const props = {
    ...attrs,
  };

  return <LoginForm {...props} />;
}

storiesOf('LoginForm', module)
  .addDecorator(story => <div className="list-items">{story()}</div>)
  .add('default', () => buildStory({}));
