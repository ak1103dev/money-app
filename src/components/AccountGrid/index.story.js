import React from 'react';
import { storiesOf } from '@storybook/react';

import AccountGrid from './index';

function buildStory(attrs) {
  const props = {
    accounts: [
      {
        name: 'Cash',
        balance: 900,
        color: 'black',
      },
      {
        name: 'Aom',
        balance: 10000,
        color: 'red',
      },
      {
        name: 'Online Shopping',
        balance: 1000,
        color: 'blue',
      },
      {
        name: 'BX',
        balance: 30000,
        color: 'gray',
      },
      {
        name: 'House',
        balance: 50000,
        color: 'orange',
      },
    ],
    ...attrs,
  };

  return <AccountGrid {...props} />;
}

storiesOf('AccountGrid', module)
  .addDecorator(story => <div className="list-items">{story()}</div>)
  .add('default', () => buildStory({}));
