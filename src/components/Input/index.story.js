import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './index';

function buildStory(attrs) {
  const props = {
    label: 'Name',
    placeholder: 'Name',
    description: 'Your name',
    errorMessage: 'Please input your name',
    ...attrs,
  };

  return <Input {...props} />;
}

storiesOf('Input', module)
  .addDecorator(story => <div className="list-items">{story()}</div>)
  .add('default', () => buildStory({}));
