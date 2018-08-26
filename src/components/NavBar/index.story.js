import React from 'react';
import { storiesOf } from '@storybook/react';

import NavBar from './index';

function buildStory(attrs) {
  const props = {
    isAuth: false,
    ...attrs,
  };

  return <NavBar {...props} />;
}

storiesOf('NavBar', module)
  .addDecorator(story => (
    <div className="list-items" style={{ background: 'white' }}>
      {story()}
    </div>
  ))
  .add('authenticated', () => buildStory({ isAuth: true }))
  .add('unauthenticated', () => buildStory({ isAuth: false }));
