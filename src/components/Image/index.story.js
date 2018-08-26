import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from './index';

function buildStory(attrs) {
  const props = {
    ...attrs,
  };

  return <Image {...props} />;
}

storiesOf('Image', module)
  .addDecorator(story => <div className="list-items">{story()}</div>)
  .add('default', () => buildStory({}));
