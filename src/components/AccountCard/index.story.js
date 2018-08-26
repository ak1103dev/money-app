import React from 'react';
import { storiesOf } from '@storybook/react';

import AccountCard from './index';

function buildStory(attrs) {
  const props = {
    name: 'Cash',
    balance: 900,
    color: 'black',
    ...attrs,
  };

  return <AccountCard {...props} />;
}

storiesOf('AccountCard', module)
  .addDecorator(story => <div className="list-items">{story()}</div>)
  .add('default', () => buildStory({}));
