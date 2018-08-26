import React from 'react';
import { storiesOf } from '@storybook/react';

import AccountForm from './index';

function buildStory(attrs) {
  const props = {
    ...attrs,
  };

  return <AccountForm {...props} />;
}

storiesOf('AccountForm', module)
  .addDecorator(story => <div className="list-items">{story()}</div>)
  .add('default', () => buildStory({}));
